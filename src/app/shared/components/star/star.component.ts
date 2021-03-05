import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl:'star.component.html',
  styleUrls:['star.component.scss']
})

export class StarComponent implements OnInit, OnChanges{

  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void{
    this.starWidth = this.rating * 74 / 5;
  }

  ngOnInit(): void{

  }




}
