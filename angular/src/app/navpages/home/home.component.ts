import {Component, OnInit} from '@angular/core';
import {Data, DataService} from './data.service';
import sdk from '@stackblitz/sdk';


const project = {
  files: {
    'index.html': `<h2>Hello there!</h2>`,
    'index.ts': `// I'm empty.`,
    'randomFile.ts': '// You should delete me.'
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  tags: ['stackblitz', 'sdk']
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error: any;
  headers: string[];
  data: Data[];

  tmsg: string;

  mouseX: string;
  mouseY: string;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  populateData() {
    this.dataService.getConfig().subscribe(
      items => {
        this.data = items;
      }, // success path
      error => (this.error = error) // error path
    );
  }

  getURL() {
    this.populateData();
  }

  test() {
    this.getURL()

    // Embed this project


    sdk.embedProject('myDiv', project, {
      openFile: 'index.html'
    })
      // Get the VM of the embedded instance
      .then(vm => {
        // Wait 2 seconds...
        setTimeout(() => {
          // Then update the VM's file system :)
          vm.applyFsDiff({
            create: {
              'index.html': `<h1>This was updated programmatically!</h1>`,
              'index.ts': `const a = 3;
                           console.log(a);
              `
            },
            destroy: ['randomFile.ts']
          });
        }, 2000)
      });
  }

  mouseMove($event) {
    this.mouseX = $event.offsetX;
    this.mouseY = $event.offsetY;
    const svgElement = document.getElementById('svgCircle');
    svgElement.setAttribute('cx', this.mouseX);
    svgElement.setAttribute('cy', this.mouseY);
  }
}
