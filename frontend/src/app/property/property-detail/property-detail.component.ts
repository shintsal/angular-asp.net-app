import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    )

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     )
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/images/kitchen.jpg',
        medium: '../../assets/images/kitchen.jpg',
        big: '../../assets/images/kitchen.jpg'
      },
      {
        small: '../../assets/images/livingroom.jpg',
        medium: '../../assets/images/livingroom.jpg',
        big: '../../assets/images/livingroom.jpg'
      },
      {
        small: '../../assets/images/bedroom.jpg',
        medium: '../../assets/images/bedroom.jpg',
        big: '/../../assets/images/bedroom.jpg'
      },
      {
        small: '../../assets/images/bathroom.jpg',
        medium: '../../assets/images/bathroom.jpg',
        big: '../../assets/images/bathroom.jpg'
      },
    ];
  }



}
