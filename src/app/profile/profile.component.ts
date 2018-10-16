import { Component, OnInit } from '@angular/core';
import { Profile2Service } from 'src/app/profile2.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any[];
  repos:any[];
  username:string;
  BarChart =[];
  
 

  constructor( private profileservice: Profile2Service) {

   }

  getUserProfile(){
    this.profileservice.findProfile(this.username);
    this.profileservice.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
    
  });

    this.profileservice.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos; 
    });

    
    this.profileservice.getProfileInfo().subscribe(profile => {
      let followers = profile.followers;
      let following = profile.following;
      let gists = profile.public_gists;
    
    this.BarChart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: ["Followers", "Following", "Gists"],
        datasets: [{
          label:[],
          data: [followers, following, gists],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            
            'rgba(255, 206, 86, 0.2)',
            
            
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            
            'rgba(255, 206, 86, 1)',
            
            
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      }
    })
  })


   
   }


  ngOnInit() {

    
  
  }

}
