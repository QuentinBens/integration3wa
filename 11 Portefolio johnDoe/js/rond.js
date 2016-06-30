		window.onload = function(){
			var data = [
				{
					value: 60,
					color:"#f3453c",
					highlight: "#FF5A5E",
					label: "HTML"
				},
				{
					value: 50,
					color: "#f4813a",
					highlight: "#fc9e67",
					label: "CSS"
				},
				{
					value: 40,
					color: "#f5ae28",
					highlight: "#FFC870",
					label: "JS"
				},
				{
					value: 120,
					color: "#f9c56c",
					highlight: "#facf85",
					label: "Test"
				}
			];
			var myDoughnutChart = new Chart(document.getElementById("competencesChart").getContext("2d")).Doughnut(data, {segmentShowStroke : false});
		};
