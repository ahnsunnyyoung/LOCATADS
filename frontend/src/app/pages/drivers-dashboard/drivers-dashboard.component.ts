import { Component } from '@angular/core';
import { Taxis } from 'src/app/model/mock-taxi';

@Component({
  selector: 'app-drivers-dashboard',
  templateUrl: './drivers-dashboard.component.html',
  styleUrls: ['./drivers-dashboard.component.scss']
})
export class DriversDashboardComponent {

  chart: any;
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  axisY: {
		includeZero: true,
		labelFormatter: (e:any) => {
			var suffixes = ["", "K", "M", "B"];
 
			var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
			if(order > suffixes.length - 1)
				order = suffixes.length - 1;
 
			var suffix = suffixes[order];
			return (e.value / Math.pow(1000, order)) + suffix;
		}
	  },
	  axisY2: {
		includeZero: true,
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "column",
		showInLegend: true,
		name: "Views",
		yValueFormatString: "#,###",
		dataPoints: [
			{ label: "Jan", y: 250000 },
			{ label: "Feb", y: 431000 },
			{ label: "Mar", y: 646000 },
			{ label: "Apr", y: 522000 },
			{ label: "May", y: 464000 },
			{ label: "Jun", y: 470000 },
			{ label: "Jul", y: 534000 },
			{ label: "Aug", y: 407000 },
			{ label: "Sep", y: 484000 },
			{ label: "Oct", y: 465000 },
			{ label: "Nov", y: 424000 },
			{ label: "Dec", y: 231000 }
		]
	  },{
		type: "spline",
		showInLegend: true,
		name: "Driving Time",
		axisYType: "secondary",
		dataPoints: [
			{ label: "Jan", y: 12 },
			{ label: "Feb", y: 5 },
			{ label: "Mar", y: 4 },
			{ label: "Apr", y: 6.5 },
			{ label: "May", y: 7 },
			{ label: "Jun", y: 9.4 },
			{ label: "Jul", y: 10 },
			{ label: "Aug", y: 10.1 },
			{ label: "Sep", y: 8 },
			{ label: "Oct", y: 8.8 },
			{ label: "Nov", y: 11 },
			{ label: "Dec", y: 9 }
		]
	  }]
	}	
	

	taxiData = Taxis;
}
