Vue.component('cross', {

    template: `<svg class="checkmark_1" viewBox="0 0 100 100">
                    <path class="checkmark_check_1" fill="none" d="M30 30 70 70" />
                    <path class="checkmark_check_2" fill="none" d="M70 30 30 70" />
                </svg>`
})

Vue.component('zero', {
    
    template: `<svg class="checkmark_2" viewBox="0 0 100 100">
                    <circle class="checkmark_circle" cx="50" cy="50" r="25" fill="none"  />
                </svg>`
})


var app = new Vue ({
    el: "#app",
    data: {
        cell_0: null,
        cell_1: null,
        cell_2: null,
        cell_3: null,
        cell_4: null,
        cell_5: null,
        cell_6: null,
        cell_7: null,
        cell_8: null,
        move_count: 0,
        message:'Ход O',
        game: [],
        OorX: ''
      },
    methods: {
        move: function (id) {
            if(this.move_count == 9 || this.message === "Нолики победили!" || this.message === "Крстики победили!")
            {
                return true;
            };

            switch (id) {
                case 0:
                    this.cell_0 = this.cell_move(this.cell_0);
                break;  
                case 1:
                    this.cell_1 = this.cell_move(this.cell_1);
                break;
                case 2:
                    this.cell_2 = this.cell_move(this.cell_2);
                break;
                case 3:
                    this.cell_3 = this.cell_move(this.cell_3);
                break;  
                case 4:
                    this.cell_4 = this.cell_move(this.cell_4);
                break;
                case 5:
                    this.cell_5 = this.cell_move(this.cell_5);
                break;
                case 6:
                    this.cell_6 = this.cell_move(this.cell_6);
                break;
                case 7:
                    this.cell_7 = this.cell_move(this.cell_7);
                break;
                case 8:
                    this.cell_8 = this.cell_move(this.cell_8);
                break;
            };

            if(this.OorX == 'zero') {
                this.game[id] = 0;
            } else {
                this.game[id] = 1;
            };

            if(this.is_won(0)) {
                return this.message = "Нолики победили!";
            };

            if(this.is_won(1)) {
                return this.message = "Крстики победили!";
            };

            if(this.move_count == 9){
                return this.message = "Ничья!";
            };
        },
        refresh: function() {
            this.cell_0 = null;
            this.cell_1 = null,
            this.cell_2 = null,
            this.cell_3 = null,
            this.cell_4 = null,
            this.cell_5 = null,
            this.cell_6 = null,
            this.cell_7 = null,
            this.cell_8 = null,
            this.move_count = 0,
            this.message = 'Ход O',
            this.game = [],
            this.OorX = '';
        },
        is_won: function(won) {
            if(
                (this.game[0] === won && this.game[1] === won && this.game[2] === won) ||
                (this.game[3] === won && this.game[4] === won && this.game[5] === won) ||
                (this.game[6] === won && this.game[7] === won && this.game[8] === won) ||
                (this.game[0] === won && this.game[3] === won && this.game[6] === won) ||
                (this.game[1] === won && this.game[4] === won && this.game[7] === won) ||
                (this.game[2] === won && this.game[5] === won && this.game[8] === won) ||
                (this.game[0] === won && this.game[4] === won && this.game[8] === won) ||
                (this.game[2] === won && this.game[4] === won && this.game[6] === won) 
            ) {
                return true;
            } else {
                return false;
            }
        },
        cell_move: function(cell) {
            console.log(this.cell_8);
            if(cell === null) {
                console.log(cell);
                this.move_count++;
        
                if (this.move_count%2 == 0) {
                    this.OorX = 'cross';
                    this.message = 'Ход O';
                } else { 
                    this.OorX = 'zero';
                    this.message = 'Ход X'}
        
                cell = this.OorX;
                return cell;
            } else {
                return cell;
            }       
        }
    }
})
