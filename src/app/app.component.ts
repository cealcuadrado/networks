import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {SocialNetwork} from './shared/interfaces/social-network';
import {SOCIALNETWORKS} from '../assets/data/social-networks';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Network} from './shared/interfaces/network';
import {NETWORKS} from '../assets/data/networks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'networks';
  year: number;

  faEnvelope: IconDefinition;
  socialNetworks: SocialNetwork[];
  networks: Network[];

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.socialNetworks = SOCIALNETWORKS;
    this.networks = NETWORKS;
    this.faEnvelope = faEnvelope;
  }
}
