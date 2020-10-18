<template>
    <div>
      <div class="l">
        <p>Memories of childhood were the dreams that stayed with you after you woke.</p>
      </div>
         <main>
      <section class="player">
        <div class="controls">
          <button class="play" v-if="!isPlaying" @click="play" >Click Here </button>
           
        </div>
      </section>
    </main>

    <div>
      <v-card v-show="isPlaying">
      <div class="row">
         <div class="col-sm-1"></div>
        <div class="col-sm-2">
            <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz1.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      H
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
      </div>
      

       
        <div class="col-sm-2">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz2.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      A
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
       
          <div class="col-sm-2">
            <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz22.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      P
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
      </div>
        <div class="col-sm-2">
             <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz3.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      P
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
         
        <div class="col-sm-2">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz4.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      Y
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
         <div class="col-sm-1"></div>
         </div>


          <div class="row">
      
             <div class="col-sm-3"></div>
       <div class="col-sm-3">
                <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz5.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      2
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz6.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      1
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3"></div>
          </div>

          <div class="row">
            <div class="col-sm-1"></div>
        <div class="col-sm-2">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz13.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      B
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
      </div>

       
        <div class="col-sm-2">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz14.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      I
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-2">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz9.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      R
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-2">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz10.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      T
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
          <div class="col-sm-2">
             <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz16.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out pink darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      H
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
      </div>
      <div class="col-sm-1"></div>
         </div>

          <div class="row">
      

       <div class="col-sm-2"></div>
        <div class="col-sm-3">
                 <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz11.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      D
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz12.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       A
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz15.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      Y
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-1"></div>
         </div>

          <div class="row">
        <div class="col-sm-3">
          <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz17.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      S
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
      </div>

       
        <div class="col-sm-3">
                 <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz18.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow  darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      A
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz19.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow  darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      M
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
        <div class="col-sm-3">
              <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/qbz20.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow  darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      U
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
        </div>
         </div>
         <br>
         <br>
         <br>

          

        <div class="row">
          <div class="col-sm-6">

     <v-img
        src="../assets/qbz21.jpeg"
      >

      </v-img>

          </div>


          <div class="col-sm-6">
            <div class="vb">
            <h1>From : Gotenkz Goregaonkar</h1>
            <h2>Special THANKS to Rohit , Shraddha , Qashish</h2>
            <h3>Lots of Love from PUNE GANG</h3>
            <h4>Happy Birthday Samruddhi !!!</h4>
            </div>

          </div>
        </div>

        
        </v-card>
      </div>

    </div>





</template>


<script>

export default {
  name: 'app',
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Makhna',
          artist: 'xyzabcnpm run',
          src: require('../assets/mak.mp3')
        }
      ],
      player: new Audio()
       
    }
  },
  methods: {
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
}
</script>

<style>

header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;

}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}

.play, .pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 15px;
  border-radius: 8px;
  color: #FFF;
  background-color: #CC2E5D;
}

.vb {
	float: right;

	color: red;
	font-family: cursive;
font-style: italic;
font-size: 25;
}

.l{
color: blue;
font-family: cursive;
font-style: italic;
text-align: center;
font-size: 25;

 }






</style>
