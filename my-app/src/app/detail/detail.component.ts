import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Label } from '../hero';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  hero: Label;
  id: number;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.gteHero();
  }
  gteHero(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHeroes().subscribe(hero => (this.hero = hero.find(element=>element.id===this.id)));
  }
}
