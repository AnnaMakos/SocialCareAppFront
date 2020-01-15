import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from
  '@angular/core';
import { InstitutionService } from '../service/institution.service';
import { InstitutionDTO } from '../model/institution.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  institutionId: number;
  currentInstitutionName: string;
  currentInstitutionAdress: string;
  geoX = -1;
  geoY = -1;
  coordinates = new google.maps.LatLng(this.geoX, this.geoY);

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12
  };

  constructor(private institutionService: InstitutionService) { }

  ngAfterViewInit() {
    this.setParams();
  }

  mapInitializer() {
    this.coordinates = new google.maps.LatLng(this.geoX, this.geoY);
    this.marker.setPosition(this.coordinates);
    this.mapOptions.center = this.coordinates;
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  getInstitutionId() {
    this.institutionService.currentInstitutionId.subscribe(id => {
      this.institutionId = id;
    })
  }

  setParams() {
    this.institutionService.currentInstitutionId.subscribe(id => {
      this.institutionId = id;
      this.institutionService.findInstitutionById(this.institutionId).subscribe(institution => {
        this.currentInstitutionName = institution.name;
        this.currentInstitutionAdress = institution.address;
        this.geoX = institution.geoX;
        this.geoY = institution.geoY;
        this.mapInitializer();
        
      });
    });
  }

}
