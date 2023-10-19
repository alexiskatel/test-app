import { Component, OnInit } from '@angular/core';
import { ServiceData, ServiceStatisticData } from 'projects/my-first-app/src/app/models/interfaces/service-data';
import { ServicesData, ServicesStatisticsData } from './services.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public data!: ServiceData[]
  public statisticsData!: ServiceStatisticData[]
  ngOnInit(): void {
      this.data = ServicesData
      this.statisticsData = ServicesStatisticsData
  }
}
