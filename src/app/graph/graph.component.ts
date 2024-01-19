import { Component, OnInit,OnDestroy,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'
import {DestinationApiResponseService } from '../services/destination-api-response.service';
import {debounceTime, fromEvent, Observable, Subscription } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class GraphComponent implements OnInit,OnDestroy,AfterViewInit{

  //variables used to store and create the Canvas-Element
  @ViewChild('myChart') myChart!: ElementRef;
  chartContainer!:Chart;
  cnv!:any;

  //Variables that store the amount of Destinations from the different Continents
  continentAmountAfrica!:number;
  continentAmountEurope!:number;
  continentAmountNA!:number;
  continentAmountSA!:number;
  continentAmountAsia!:number;
  continentAmountOceania!:number;



  //Observables and Subscriptions variables
  resizeObservable$!:Observable<Event>;
  resizeSubscription$!:Subscription;
  destSub1$!:Subscription;
  destSub2$!:Subscription;
  destSub3$!:Subscription;
  destSub4$!:Subscription;
  destSub5$!:Subscription;
  destSub6$!:Subscription;


  //Constructor used to store the count of the continent-destinations, handled by Subscriptions and Observables
  constructor(destinationService :DestinationApiResponseService){
    this.destSub1$=destinationService.getDestinationCountPerContinent(0).subscribe((count:number)=>{this.continentAmountAsia=count});
    this.destSub2$=destinationService.getDestinationCountPerContinent(1).subscribe((count:number)=>{this.continentAmountAfrica=count});
    this.destSub3$=destinationService.getDestinationCountPerContinent(2).subscribe((count:number)=>{this.continentAmountEurope=count});
    this.destSub4$=destinationService.getDestinationCountPerContinent(3).subscribe((count:number)=>{this.continentAmountOceania=count});
    this.destSub5$=destinationService.getDestinationCountPerContinent(4).subscribe((count:number)=>{this.continentAmountNA=count});
    this.destSub6$=destinationService.getDestinationCountPerContinent(5).subscribe((count:number)=>{this.continentAmountSA=count});
  }

  ngAfterViewInit(): void {
    this.cnv=this.myChart.nativeElement;
    this.cnv.style.backgroundColor = "#add8e6";
     if(!this.chartContainer){
        setTimeout(() => {this.createChart();}, 150);
      }
  }





//resize observable to trigger a new loaded chart after resize
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.pipe(debounceTime(200)).subscribe( evt => {this.createChart()})

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

//unsubscription of the Subscription variables
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
    this.destSub1$.unsubscribe()
    this.destSub2$.unsubscribe()
    this.destSub3$.unsubscribe()
    this.destSub4$.unsubscribe()
    this.destSub5$.unsubscribe()
    this.destSub6$.unsubscribe()
}


}
