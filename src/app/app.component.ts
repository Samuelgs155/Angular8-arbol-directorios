import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-arbol';
  public treeData: Object[] = [
        {
            nodeId: '1', nodeText: 'Documents', nodeIcon: 'folder',
            nodeChild: [
                { nodeId: '11', nodeText: 'Team management.docx', nodeIcon: 'folder' },
                { nodeId: '12', nodeText: 'Entity Framework Core.pdf', nodeIcon: 'folder' }
            ]
        },
        {
            nodeId: '2', nodeText: 'Downloads', nodeIcon: 'folder', expanded: true,
            nodeChild: [
                { nodeId: '21', nodeText: 'Sales report.ppt', nodeIcon: 'ppt' },
                { nodeId: '22', nodeText: 'Introduction to Angular.pdf', nodeIcon: 'pdf' },
                { nodeId: '23', nodeText: 'Paint.exe', nodeIcon: 'exe' },
                { nodeId: '24', nodeText: 'TypeScript sample.zip', nodeIcon: 'zip' }
            ]
        },
        {
            nodeId: '3', nodeText: 'Music', nodeIcon: 'folder',
            nodeChild: [
                { nodeId: '31', nodeText: 'Crazy tone.mp3', nodeIcon: 'audio' }
            ]
        },
        {
            nodeId: '4', nodeText: 'Videos', nodeIcon: 'folder',
            nodeChild: [
                { nodeId: '41', nodeText: 'Angular tutorials.mp4', nodeIcon: 'video' },
                { nodeId: '42', nodeText: 'Basics of Programming.mp4', nodeIcon: 'video' }
            ]
        }
  ];

  public treeFields: Object = {
    dataSource: this.treeData,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'nodeIcon'
  };

  constructor() { }

  ngOnInit() {

  }

}
