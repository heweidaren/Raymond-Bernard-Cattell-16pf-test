import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Label } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  hero: Label[];
  id = 0;
  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(hero => this.hero = hero);
  }
  onClick() {
    this.id++;
  }
}
