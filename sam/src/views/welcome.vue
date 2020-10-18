<template>
<v-app>
  <div >
    
      <div class="text-center ">

    <img src="../assets/bday.jpg" alt="Nature" class="responsive">
    </div>

    <main>
      <section class="player">
        <div class="controls">
          <button class="play" v-if="!isPlaying" @click="play" >Click Here </button>
           
        </div>
      </section>
    </main>

    <v-card v-show="isPlaying"  >
      
      <div>
        <div class="row">
          <div class="w">
          <div class="col-sm-4">
            <img src="../assets/a.jpg">
            </div>
          </div>
          <div class="col-sm-4">
           <h3>
              “Wishing you a day filled with happiness and a year filled with joy. Happy birthday!” “Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!” “Hope your special day brings you all that your heart desires!
           </h3>
          </div>
          <div class="col-sm-4">
            <img src="../assets/b.jpg">
            </div>
        </div>
      </div>
    
    <br>

    <div class="text-center">
 <a href="https://www.animatedimages.org/cat-birthday-49.htm"><img src="https://www.animatedimages.org/data/media/49/animated-birthday-image-0234.gif" border="0" alt="animated-birthday-image-0234" /></a>
</div>

<br>
<br>

<div class="row">

  <div class="col-sm-4">
    <h3>
       Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!
    </h3>
  </div>

  <div class="col-sm-4">
      <img src="../assets/c.jpg">
  </div>

  <div class="col-sm-4">
    <h3>
      This birthday, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. Happy birthday to one of the sweetest people I’ve ever known.
    </h3>
  </div>
</div>
  <br>
   <br>
    <div class="row">
      <div class="col-sm-4">
        <img src="../assets/i.jpg">
      </div>
      <div class="col-sm-4">
          <p>Duniya Ki Khushiyan Aapko Mil Jayein,
Apno Se Mil Ke Aapka Man Khil Jaye,
Chehre Par Dukh Ki Kabhi Shikan Na Ho,
Aapke Birthday Par Meri ShubKamnayein.</p>
          <p>Aaj Ugata Hua Suraj Dua De Aapko,
Khilta Hua Gulab Khushboo De Aapko,
Main To Kuchh Dene Ke Kabil Nahin,
Dene Wala Ek Lambi Umar De Aapko.</p>
          <p>Likh Du Tumhari Umr Main Chand Sitaro Se,
Janmdin Manaau Tumhara Phoolo Se Baharo Se,
Har Ek KhoobSoorti Duniya Ki LaKar De Du,
Mehfilein Sajaa Du Haseen-Haseen Najaro Se.</p>
        <p>Happy Birthday !!!</p>
      </div>
      <div class="col-sm-4">
        <img src="../assets/j.jpg">
      </div>
    </div>

    <div class="text-center">
    <div class="row ">
      <div class="col-sm-4">
                      <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
       
        src="../assets/k.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
          >
          Happy 
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
     
      
      </v-card-text>
    </v-card>
  </v-hover>
      </div>
      <div class="col-sm-4">
                       <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        
        src="../assets/l.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
          >
        Birthday
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
     
      
      </v-card-text>
    </v-card>
  </v-hover>
      </div>
      <div class="col-sm-4">
                       <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        
        src="../assets/m.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
          >
        Samrudhi
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
     
      
      </v-card-text>
    </v-card>
  </v-hover>
      </div>
      </div>
      </div>


    



   <div class="text-center">
<router-link to="/fry"><button class="pause" @click="pause">Next Page</button> </router-link>
</div>
<!-- <router-link to="/fry"> <v-btn class="ma-2" tile color="red" dark onClick="window.location.reload();">Next Page</v-btn></router-link> -->
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
          src: require('../assets/xyz.mp3')
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
.responsive {
  width: 100%;
  height: auto;
}



</style>