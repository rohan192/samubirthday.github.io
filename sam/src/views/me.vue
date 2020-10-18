<template>
<v-app>
    <div>
        <div class="l" >
          <p>It's all about those happy moments with you.</p>
          </div>
         <main>
      <section class="player" >
        <div class="controls">
          <button class="play" v-if="!isPlaying" @click="play" >Click Here </button>
         
        </div>
      </section>
    </main>

    <v-card v-show="isPlaying">
    
        <div class="row">
      
            <div class="col-sm-4">
                     <img src="../assets/e.jpeg">

            </div>
            
        


            <div class="col-sm-4">
              <h4>Happy Birthday Samruddhi ❤️ (OLA the LOLA). You are the amazing friend i ever met.We had fun in the STC. Masti in RCF and lots of bakchodi. Our Friendship got stronger in this last 4 years.Thanks for there with me in my dark days❤️ .I wish to have good future to you my dance patner.
                 We always had a strong and wonderful connection between us. You are my best friend and I really treasure our friendship bond❤️ .
                Thank you for being there for me when I call you and need someone to just listen. It doesn’t matter where we are in this world or in our lives, I know you will always pick up.
                Love you my Dumbo Friend❤️  !!!
              </h4>
            </div>

             <div class="col-sm-4">
                     <img src="../assets/f.jpeg">
             </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="../assets/g.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
          >
          You are Caring and Truthworthy Friend !
          </div>
        </v-expand-transition>
      </v-img>
      
    </v-card>
  </v-hover>
</div>

       <div class="col-sm-6">
               <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="../assets/h.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
          >
          Happy Birthday Chomu
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</div>
          </div>




      <div class="text-center">
        <router-link to="/fry"><button class="pause"  @click="pause">Previous Page</button> </router-link>
         <router-link to="/family"><button class="pause"  @click="pause">Next Page</button> </router-link>
     </div>

   
     
        
</v-card>


    </div>
    </v-app>
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
          src: require('../assets/abc.mp3')
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

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.l{
color: blue;
font-family: cursive;
font-style: italic;
text-align: center;
font-size: 25;

 }

</style>
