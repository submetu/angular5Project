import {Component, OnInit, OnChanges} from '@angular/core';
// import {Component, Output, EventEmitter, OnInit, Input, OnChanges} from '@angular/core';

// import {AuthenticationService, LocalStorageService, EventService} from '../../services';

// declare var jQuery: any;

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  moduleId: module.id
})

export class FooterComponent implements OnInit, OnChanges {


  ngOnInit(): any {
   
  }

  ngOnChanges(changes) {
    //console.log(changes);
  }

  
}
