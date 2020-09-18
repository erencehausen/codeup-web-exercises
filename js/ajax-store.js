"use strict";

$().ready(function(){
    let mainContainer = $('#main-container');
    let mainHeader = $('#main-header');
    let refreshButton = $('#refresh-button');
    let products = $('#products');
    let insertProducts = $('#insert-products');
    let priceFilter = $('#price-filter');
    mainContainer.addClass('container');
    mainHeader.addClass('text-center m-3');
    refreshButton.addClass('my-3');
    products.addClass('table');
    $('#table-header, #product').addClass('background-lightblue');

    $.get("data/inventory.json").done(function(data, status, jqXhr){
        alert("AJAX call completed successfully!");
        console.log("Request status: " + status);
        console.log("Data returned from server:");

        priceFilter.click(function() {
            var sort = quickSort(data, 0, items.length - 1);
            console.log(data[0].price);
        });

        refreshButton.click(function(){
            let innerHTML = '<br>';
            data.forEach(function(item) {
                innerHTML += `<tr>
                                    <td>${item['title']}</td>
                                    <td>${item['quantity']}</td>
                                    <td>${item['price']}</td>
                                    <td>${item['categories']}</td>
                                  </tr>\n`;
            });
            innerHTML += '<br>\n';
            insertProducts.html(innerHTML);
            $('tr:odd').addClass('background-lightlightblue');
        });

        function indexSwap(items, leftIndex, rightIndex) {
            var temp = items[leftIndex];
            items[leftIndex] = items[rightIndex];
            items[rightIndex] = temp;
        }

        function partition(items, left, right) {
            var pivot = items[Math.floor((right + left) / 2)],
                leftPointer = left,
                rightPointer = right;
            while(leftPointer <= rightPointer) {
                while(items[leftPointer] < pivot) {
                    leftPointer++;
                }
                while(items[rightPointer] < pivot) {
                    rightPointer++;
                }
                if(leftPointer <= rightPointer) {
                    indexSwap(items, leftPointer, rightPointer);
                    leftPointer++;
                    rightPointer++;
                }
            }
            return leftPointer;
        }

        function quickSort(items, left, right) {
            var index;
            if(items.length > 1) {
                index = partition(items, left, right);
                if(left < index - 1) {
                    quickSort(items, left, index -1);
                }
                if(index < right - 1) {
                    quickSort(items, index, right);
                }
            }
            return items;
        }
    });

    //    TODO: Add a search bar for fun
});