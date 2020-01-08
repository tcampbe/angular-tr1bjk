import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    profileImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    name: "captain awful",
    location: "Lubbock, TX",
    reviews: 9
};

  constructor() { }

  ngOnInit() {
    this.user.profileImage = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
    this.user.name = "captain awful";
    this.user.location = "Lubock TX";
    this.user.reviews = 9;
  }
  


}