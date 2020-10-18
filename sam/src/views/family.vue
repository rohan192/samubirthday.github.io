<template>
    <div>
        <div class="k">
            <p>Rejoice with your family in the beautiful land of life.</p>
            <p>SALUD MI FAMILIA.</p>
            <p></p>

        </div>
        <br>
        <br>
       
        <div class="text-center">
          <section>
           <video  controls>
               <source src="../assets/op.mp4" type="video/mp4">
                <source src="../assets/op.mp4" type="video/ogg"> 
           </video>
          </section>
        </div>
              <main>
      <section class="player">
        <div class="controls">
          <button class="play" v-if="!isPlaying" @click="play" >Click Here </button>
           
        </div>
      </section>
    </main>
    <v-card v-show="isPlaying">
      <br>
      <br>
      <br>
      <br>
      <div class="row">
        <div class="col-sm-2">
          <img src="../assets/rg1.jpeg">
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg2.jpeg">
        </div>
      </div>
       <div class="row">
        <div class="col-sm-2">
         
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg3.jpeg">
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          <img src="../assets/rg4.jpeg">
        </div>
        <div class="col-sm-2">
           
        </div>
      </div>
       <div class="row">
        <div class="col-sm-2">
          <img src="../assets/rg7.jpeg">
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg5.jpeg">
        </div>
        <div class="col-sm-2">
          <img src="../assets/rg6.jpeg">
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg8.jpeg"> 
        </div>
      </div>
       <div class="row">
        <div class="col-sm-2">
       
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
      </div>
        <div class="row">
        <div class="col-sm-2">
       <img src="../assets/rg9.jpeg"> 
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          <img src="../assets/rg10.jpeg"> 
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
       
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
       <img src="../assets/rg11.jpeg"> 
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          <img src="../assets/rg12.jpeg"> 
        </div>
      </div>
       <div class="row">
        <div class="col-sm-2">
       
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg13.jpeg"> 
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
        
        </div>
        <div class="col-sm-2">
           <img src="../assets/rg14.jpeg"> 
        </div>
        <div class="col-sm-2">
          
        </div>
      </div>
       <div class="row">
        <div class="col-sm-2">
       
        </div>
        <div class="col-sm-2">
         
        </div>
        <div class="col-sm-2">
         <img src="../assets/rg15.jpeg"> 
        </div>
        <div class="col-sm-2">
         <img src="../assets/rg16.jpeg"> 
        </div>
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-2">
          
        </div>
      </div>
      

        <div class="text-center">
    <router-link to="/me"><button class="pause"  @click="pause">Previous Page</button></router-link>
    <router-link to="/child"><button class="pause"  @click="pause">Next Page</button></router-link>
    </div>
    </v-card>
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
          src: require('../assets/rty.mp3')
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
.k{
color: blue;
font-family: cursive;
font-style: italic;
text-align: center;
font-size: 25;

 }



</style>