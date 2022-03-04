import React from 'react';
import './App.css';
import CardSet from './Components/YogaCards'
import Head from './Components/Heading';
import Color from './Components/Background';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
   <>
   <Color/>
   <Head/>
   <CardSet yogaImg="https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-yoga-yoga-pose-posture-yoga-action-png-image_475259.jpg"
   name="Locust (Shalabasana)" Benefit="BENEFITS : " explain="Strengthens the muscles of the spine, root, and backs of the arms and legs.
   Stimulates the abdominal organs.Relieves stress" video="https://www.youtube.com/watch?v=vMpznveQDgE"
   />
     <CardSet yogaImg="https://i.pinimg.com/474x/dc/1a/37/dc1a374cc1c1079e8560b4c4e91083d2.jpg"
   name="Cobra pose (Bhujangasana)" Benefit="BENEFITS : " explain="This animal yoga pose provides relief to the back as it strengthens the spine.
   In particular, it strengthens the lower back. So, it is great for athletes and those who do a lot of physical work because excessive physical activity strains the lower back." video="https://www.youtube.com/watch?v=5-1JaosvDEA"
   />
     <CardSet yogaImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOH-fOepQxcdeUDeHpR9Tfi7DQvzhf7unXg&usqp=CAU"
   name=" Butterfly pose (Badhakonasana)" Benefit="BENEFITS : " explain="This animal yoga pose is great for those who are on their feet a lot. It relieves people of their fatigue. 
   It helps women as it reduces menstrual discomfort and menopause symptoms. " video="https://www.youtube.com/watch?v=vMpznveQDgE"
   />
     <CardSet yogaImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqwciI_K0QbOCrCtmsYdqB262HMIgeyX86A&usqp=CAU"
   name="Dolphin plank pose (Makara Adho Mukha Svanasana)" Benefit="BENEFITS : " explain="This animal yoga pose is part of core-building exercises that sportspersons include in their exercise regimen. This asana is suitable for men, women, and children. 
   It strengthens the arms, legs, abdomen, chest, and lower back.It helps in improving posture as it straightens the spine." video="https://www.youtube.com/watch?v=vMpznveQDgE"
   />
     <CardSet yogaImg="https://thumbs.dreamstime.com/b/hanumanasana-monkey-pose-yoga-split-girl-doing-hard-position-59021049.jpg"
   name="monkey pose (hanumanasana)" Benefit="BENEFITS : " explain=" It enables free movement of the neck and lateral movement of the limbs." video="https://www.youtube.com/watch?v=vMpznveQDgE"
   />
     <CardSet yogaImg="https://thumbs.dreamstime.com/z/woman-doing-eagle-pose-garudasana-exercise-flat-vector-woman-doing-eagle-pose-garudasana-exercise-flat-vector-illustration-239296341.jpg"
   name="Eagle pose (Garudasana) " Benefit="BENEFITS : " explain="Do this pose often enough and you won’t be able to help having a sense of balance! After all, you are on one leg! The pose, in totality, is asymmetric which makes you concentrate all your energies in one direction. This animal yoga pose will be an interesting challenge for children. " video="https://www.youtube.com/watch?v=vMpznveQDgE"
   />
   
   </>
  );
}

export default App;
