import {Component} from 'angular2/core';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Votes</h1>
    	<vote 
    		[totalVotes]="post.totalVotes" 
    		[myVote]="post.myVote" 
    		[change]="onVote($event)"
    	></vote>
    `,
    directives: [VoteComponent]
})
export class AppComponent { 
	post = {
		totalVotes: 9,
		myVote: 0
	}
	onVote($event){
		console.log($event)
	}
}