import { Component, OnInit,OnDestroy,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'
import { DestinationService } from '../services/destination.service';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
})
export class GraphComponent implements OnInit,OnDestroy,AfterViewInit{
  @ViewChild('myChart') myChart!: ElementRef;
  chartContainer!:Chart;
  continentAmountAfrica!:number;
  continentAmountEurope!:number;
  continentAmountNA!:number;
  continentAmountSA!:number;
  continentAmountAsia!:number;
  continentAmountOceania!:number;
  cnv!:any;
  resizeObservable!:Observable<Event>;
  resizeSubscription!:Subscription;


  constructor(destinationService :DestinationService){
    this.continentAmountAfrica=destinationService.getAfriqueDestinations().length;
    this.continentAmountEurope=destinationService.getEuropeDestinations().length;
    this.continentAmountNA=destinationService.getNADestinations().length;
    this.continentAmountSA=destinationService.getSADestinations().length;
    this.continentAmountAsia=destinationService.getAsieDestinations().length;
    this.continentAmountOceania=destinationService.getOceanieDestinations().length;

  }


  ngAfterViewInit(): void {
    this.cnv=this.myChart.nativeElement;
    this.cnv.style.backgroundColor = "#add8e6";
  }






  ngOnInit(): void {




    if(!this.chartContainer){
      this.createChart();
    }

    this.resizeObservable = fromEvent(window, 'resize')
    this.resizeSubscription = this.resizeObservable.subscribe( evt => {
      this.createChart();
    })




}


  createChart(): void {


    Chart.register(...registerables);
    const data = {
      labels: ['Afrique','Europe','Amérique du Nord','Amérique du Sud','Asie','Océanie'],
      datasets: [{
        label: 'Destinations par Continent',
        backgroundColor: 'rgb(240, 230, 81)',
        borderColor: 'rgb(240, 230, 81)',
        data: [this.continentAmountAfrica, this.continentAmountEurope, this.continentAmountNA, this.continentAmountSA,  this.continentAmountAsia, this.continentAmountOceania],
      }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: true,
        ticks:{
          stepSize:1
        }
      }
    }
  }

  const config: ChartConfiguration = {
    type: 'bar',
    data: data,
    options: options
  }

  const chartItem: ChartItem = this.cnv as ChartItem;


      if (this.chartContainer && this.chartContainer != null) {
        this.chartContainer.destroy()
      }
      this.chartContainer = new Chart(chartItem, config);

    }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe()
}


}
