import {Component, Input, EventEmitter, Output} from 'angular2/core';

@Component({
	selector: 'vote',
	templateUrl: 'app/vote.template.html',
	styles: [`
		.container{
			width: 20px;
			font-size:40px;
			text-align="center";
			color: grey;
		}
		.glyphicon{
			cursor:pointer;
		}
	`]

})
export class VoteComponent{
	//Inputs
	@Input() totalVotes = 0;
	@Input() myVote = 0;
	
	//Outputs
	@Output() change = new EventEmitter();

	onClickUp(){
		if(this.myVote == 1){
			return;
		}
		this.myVote++;
		this.change.emit({
			myVote: this.myVote
		});
	}
	onClickDown(){
		if (this.myVote == -1) {
			return;
		}
		this.myVote--;
		this.change.emit({
			myVote: this.myVote
		});
	}
}