<template>
<div>

<div class="k">

<p> The most important thing in life will always be the people in this room.  </p>
<p>Right here. Right now.</p>
<p>SALUD MI FAMILIA.</p>
<p>You'll always be with me. And you'll always be my family.</p>
</div>



          <main>
      <section class="player">
        <div class="controls">
          <button class="play" v-if="!isPlaying" @click="play" >Click Here </button>
        
        </div>
      </section>
    </main>
    <!-- </v-card> -->

<v-card v-show="isPlaying">
<div >
  <v-carousel >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src" 
      reverse-transition="fade-transition"
      transition="fade-transition"
     
    ></v-carousel-item>
  </v-carousel>
  </div>
  <br>
  <br>
  <div class="k">
    <p>Cherish all your happy moments; they make a fine cushion for old age. </p>
    <p>Friends like Family</p>
    <p>Or</p>
    <p>Family like Friends</p>
    <p>Adepted to only fortunate ones.</p>
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
        src="../assets/xa.jpg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Strongest
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3 ><p>Qashish : </p></h3>
      <p class="k">Dear Sam,
I wanted to take the time to tell you how much our friendship means to me, even though I am sure you already know😊🌹❤️❤️.Thank you for being the hands down, best friend in my life💎❤️😊.I know we have had our ups and downs in our friendship, but I love the fact that we always find our way back. I love you♥️♥️ Happy Birthday bro♥️♥️</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xb.jpg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Innocent Soul
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Kshitija :</p></h3>
      <p class="k">Happiest Birthdayy Samrudddhii..!!🎉
U know I m bad at expressing feelings in words, But I justt Love uu💕 
So here's wishing u everything u deserve and desire. May your tummy be blessed with many plates of panipuri🙈 and ur favourite macchi🙊.. Thank u for loving me, for being my person and million more whenever I needed the most😘😘 Cheers to the fun we had and plzzz lavkr bhetu yrrr..😭😭</p>
    </div>

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
        src="../assets/xc.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Good Soul
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Pranav :</p></h3>
      <p class="k">Happiest birthday Dork! Stay happy and blessed forever.</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xd.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Angel
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Shruti : </p></h3>
      <p class="k">Hey Samruddhi many many happy returns of the day I wish you all the strength and happiness in this world you are really brave and I adore you for that and don't worry there is always bright shining day after a stormy night and I'm always there for you</p>
    </div>

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
        src="../assets/xe.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Sweetest 
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Shreya : </p></h3>
      <p class="k">I think we never talked in first year...but wo kehte hai naa manjil ek ho to raste bhi takra jate hai😂 just that happen in our case.. sammu u are the sweetest person Ive met in dypds..#partner hamesha mera gali khaneke liye sath denewali..😂I wish u get all u want in ur life be happy be strong nd give the best to every situation... happy birthday darling meet u soon❤😘😘</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xf.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Beautiful❤️
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Shreya : </p></h3>
      <p class="k">She's such a beautiful soul.Always ready to help everyone.We all love youu samruddhi.🥰😘😘</p>
    </div>

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
        src="../assets/xg.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Sweet
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p></p>Krutika : </h3>
      <p class="k">Happy birthday samruddhi may all your wishes come true and keep smiling dear</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xi.jpg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Sweet and Childish
          </div>
        </v-expand-transition>
         </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Anuja : </p></h3>
      <p class="k">Heyy sam!! I wish you a very happy wala Birthday bro 🥳🥳and I really miss you,thanks meri nayi nayi hairstyles banane k liye jo bas tu kar sakti😂😂Hope to see you soon,Enjoy you day dear and always be smiling,Love you the most😘😘♥️♥️</p>
    </div>

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
        src="../assets/xj.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Innocent
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Akshay : </p></h3>
      <p class="k">Happy birthday Samruddhi ❤️</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xn.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Ambitious
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Dimpal : </p></h3>
      <p class="k">May the almighty from up above listen and grant all the wishesh that you make tonight as you blow your birthday candle. Happiest Birthday Samruddhi 🎂🎂😗</p>
    </div>

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
        src="../assets/xl.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Cutest
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Krishna : </p></h3>
      <p class="k">Many many happy returns of the day dork.may God give u strenght & courage to fight all the odds in the life.love u 😘& take care😍.</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xm.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Cinephile
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Reet : </p></h3>
      <p class="k">Wish you many many happy returns of the day Sam🎉❤️ You are sweet,caring and fun loving person.Hanging out with you is fun.Stay blessed and safe.God bless you🙌</p>
    </div>

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
        src="../assets/xk.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Sundar
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Roshni : </p></h3>
      <p class="k">Happy birthday samruddhi❤😘..Miss you so much bro..i hope you enjoy your birthday to the fullest..🥳..You have been an amazing friend..I have always enjoyed spending time with you especially eating pani puri..😂..Meri dance partner..Meet soon babe🥰💕</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xp.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Jolly
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Deep : </p></h3>
      <p class="k">Wishing u a very happy B'day Samma .... U have always been strong n mature to handle situations , u r a warrior !! Be the way u r n Yess ..... Not waiting for prawns 😂 but yes , Maharashtrian special kothimbir vadi 🌟 .... Hope to see u soon !! Till then wish u a very happy B'day ❤️</p>
    </div>

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
        src="../assets/xq.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Cute
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Leena : </p></h3>
      <p class="k">Happiest Birthday to u 🎂🎉❤️..May god fulfill all ur wishes ❤️🤞</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xr.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Strong & Fearless🔥
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Bhavana : </p></h3>
      <p class="k">Happy candles n cake🎂🍾
I am wishing u a birthday filled with love laughter  happiness n all ur heart desire.
Have a blast ...take care bro .❤️
We r always there whenever u need 💯</p>
    </div>

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
        src="../assets/xs.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Adorable ❤️
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Pratiksha : </p></h3>
      <p class="k">Samruddhi....u r so special to everyone.really u have happiest soul..I luv the way u talk,u dance so much.. happy bday bro💕</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xu.jpg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      CHEERFUL
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Priyanka : </p></h3>
      <p class="k">wishing you a very happiest birthday Samruddhi!! I'll always cherish our good time together :) 🥳🥳  May your every wish come true. And keep the child within you alive ;) stay happy, stay blessed. Enjoy your day🤩 </p>
    </div>

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
        src="../assets/xo.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
        Adorable ❤️
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Vipul : </p></h3>
      <p class="k">Happy Birthday Samuruddhi. I hope all your dreams come true. Wish you a great day. God bless girl❤️</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xv.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      Happy soul
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Varsha : </p></h3>
      <p class="k">Wish you a very very happy birthdayyyy samruddhi❤️
I wish you all the happiness in the world❤️❤️❤️❤️</p>
    </div>

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
        src="../assets/xw.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Delightful
          </div>
        </v-expand-transition>
      </v-img>
      
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Kaustubh : </p></h3>
      <p class="k">I wish you happiest and fantastic Birthday Samrudhi.Enjoy buddy.... Thanks for being such an awesome and supportive Friend.❤️❤️❤️❤️</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xx.jpg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      My Nightout Saviour 
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Simran : </p></h3>
      <p class="k">Happiest bday man❤️❤️ 
Samruddhi mala biryani khaychi aahe tuzhya haatchi parat😛 </p>
    </div>

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
        src="../assets/xh.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Full of life
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Urvashi : </p></h3>
      <p class="k">Happy happy birthdayy you strong girl❤️You are beautiful inside out❤️
Let's soon make chicken fried rice again😛 
hope this day brings everything that your heart desires🥰loveeyou💞💞💞</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xaa.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
     Winsome
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Sarang : </p></h3>
      <p class="k">Heyy!! Happiest birthday Samruddhi! Looking forward to defeat you in uno again. Really miss the fun . Have a blast . Have the best birthday ever 🥳</p>
    </div>

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
        src="../assets/xy.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
       Cute
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Ishwari : </p></h3>
      <p class="k">Happy Birthday Samruddhiii!!!wishing u love luck and happiness❤️❤️❤️</p>
    </div>
    <div class="col-sm-3">
        <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/xz.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      Loving
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
      <h3><p>Rachana : </p></h3>
      <p class="k">Ik Samrudhi things have been different all along this lockdown period,at times I couldn’t be much present as much as I should have been,but trust me good times are on their way,and it’s all gonna happen! I have been very hesitant to communicate anything at all,cause wouldn’t know how would i talk it all,always hence asking Qashsish about you!but girl all along these many years you’ve evovled so much!😍 you’ve managed to grow into more understanding human eventhough yet maintaining your sweetest innocence♥️ We might have not been close before but you’ve always been there in times when i needed, be it anything date preparations to even that  preparation on convincing me for half hour long breakup speech! I wish i get more time with you and and enjoy so many more moments💕 i love you samrudhi though I haven’t been able to say so many things but yet I hope the best for you and ik you will be the best version now of yours♥️♥️♥️ </p>
    </div>

  </div>
  <div class="row">
    <div class="col-sm-3">

    </div>
    <div class="col-sm-3">
          <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
     <v-img
        src="../assets/rp192.jpeg"
      >
      <v-expand-transition>
      <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 black--text"
            style="height: 100%;"
       >
      LOLA
          </div>
        </v-expand-transition>
      </v-img>
     
    </v-card>
  </v-hover>
    </div>
    <div class="col-sm-3">
       <h3><p>Rohit : </p></h3>
      <p class="k">Happy birthday to one of the nicest person I have ever met, you have being an amazing friend all these years ! Once again happy birthday beautiful !</p>
    </div>
    <div class="col-sm-3">
      
    </div>
  </div>
  <br>
  <br>
  <div class="text-center">
    <router-link to="/"><button class="pause"  @click="pause">Previous Page</button></router-link>
    <router-link to="/me"><button class="pause"  @click="pause">Next Page</button></router-link>
    </div>
  </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
           {
             src: require('../assets/6.jpg')
           },
          
           {
            src: require('../assets/7.jpg')
          },
          {
            src: require('../assets/10.jpg')
          },
          {
            src: require('../assets/1.jpg')
          },
          {
            src: require('../assets/2.jpg')
          },
          {
            src: require('../assets/4.jpg')
          },
          {
            src: require('../assets/8.jpg')
          },
          
        ],
        isShowing:false,
         current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: 'Makhna',
          artist: 'xyzabcnpm run',
          src: require('../assets/bnm.mp3')
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

 .l{
color: blue;
font-family: cursive;
font-style: italic;
text-align: center;
font-size: 20;
 }

</style>