'use strict';

/**
 * @ngdoc function
 * @name leftOrRightApp.directive:ObsChart
 * @description
 * # ObsChart
 * Directive of the leftOrRightApp
 */
angular.module('leftOrRightApp')
  .directive('obsChart', function () {
    
    function smallest(listOfInts) {
      var min = listOfInts[0];
      for(var i=1; i<listOfInts.length; i++) {
        if(min >= listOfInts[i]) {
          min = listOfInts[i];
        }
      }
      return min;
    }
    
    function largest(listOfInts) {
      var max = listOfInts[0];
      for(var i=1; i<listOfInts.length; i++) {
        if(max < listOfInts[i]) {
          max = listOfInts[i];
        }
      }
      return max;
    }
    
    function earliest(d) {
      return smallest([
        smallest(d.left),
        smallest(d.right),
      ]);
    }
    
    function latest(d) {
      return largest([
        largest(d.left),
        largest(d.right),
      ]);
    }
    
    return {
      restrict: "E",
      replace: false,
      scope: {
        data: "=chartData"
      },
      link: function(scope, element, attrs) {
        
        console.log(scope.data);
        
        var opts = {
          width: "100%",
          height: 200,
          padding: {
            top: 10,
            left: 20,
            right: 20,
            bottom: 0
          }
        };

        //var xScale = d3.time.scale()
        //  .domain(earliest(scope.data), latest(scope.data))
        //  .range(opts.padding.left, opts.width - opts.padding.left - opts.padding.right);
        
        //var xAxis = d3.svg.axis()
        //  .orient("bottom")
        //  .scale(xScale);
          
        var yScale = d3.scale.ordinal()
          .domain(['L', '', 'R'])
          .rangeBands([opts.height, 0]);
        
        var yAxis = d3.svg.axis()
          .orient("bottom")
          .scale(yScale);
          
        var chart = d3.select(element[0]);

        //chart.append("g")
        //  .attr("class", "xaxis")
        //  .attr("transform", "translate(0," + (opts.height - opts.padding.top) + ")")
        //  .call(xAxis);
                
        chart.append("g")
          .attr("class", "yaxis")
          //.attr("transform", "translate(0," + (opts.height - opts.padding.top) + ")")
          .call(yAxis);
                
//        chart.append("div").attr("class", "chart")
//          .selectAll('div')
//          .data(scope.data)
//         .enter().append("div")
//          .transition(200).ease("elastic")
//          .style("width", function(d) { return d + "%"; })
//          .text(function(d) { return d + "%"; });
        }
    };
  }
);
