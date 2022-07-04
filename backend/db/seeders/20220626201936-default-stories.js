'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Stories', [{
     authorId: 2,
     title: 'The Raven',
     body: 'Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore— While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door—"Tis some visitor," I muttered,"tapping at my chamber door—Only this and nothing more." Ah, distinctly I remember it was in the bleak December;And each separate dying ember wrought its ghost upon the floor.Eagerly I wished the morrow;—vainly I had sought to borrowFrom my books surcease of sorrow—sorrow for the lost Lenore—For the rare and radiant maiden whom the angels name Lenore—Nameless here for evermore.',
     createdAt: new Date(),
     updatedAt: new Date(),
     genreId: 1
   },
   {
    authorId: 2,
    title: 'Dracula',
    body: '3 May. Bistritz. Left Munich at 8:35 P.M, on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible.The impression I had was that we were leaving the West and entering the East; the most western of splendid bridges over the Danube, which is here of noble width and depth, took us among the traditions of Turkish rule.We left in pretty good time, and came after nightfall to Klausenburgh. Here I stopped for the night at the Hotel Royale. I had for dinner, or rather supper, a chicken done up some way with red pepper, which was very good but thirsty. (Mem. get recipe for Mina.) I asked the waiter, and he said it was called "paprika hendl," and that, as it was a national dish, I should be able to get it anywhere along the Carpathians. I found my smattering of German very useful here, indeed, I don\'t know how I should be able to get on without it.Having had some time at my disposal when in London, I had visited the British Museum, and made search among the books and maps in the library regarding Transylvania; it had struck me that some foreknowledge of the country could hardly fail to have some importance in dealing with a nobleman of that country.I find that the district he named is in the extreme east of the country, just on the borders of three states, Transylvania, Moldavia, and Bukovina, in the midst of the Carpathian mountains; one of the wildest and least known portions of Europe.I was not able to light on any map or work giving the exact locality of the Castle Dracula, as there are no maps of this country as yet to compare with our own Ordance Survey Maps; but I found that Bistritz, the post town named by Count Dracula, is a fairly well-known place. I shall enter here some of my notes, as they may refresh my memory when I talk over my travels with Mina.In the population of Transylvania there are four distinct nationalities: Saxons in the South, and mixed with them the Wallachs, who are the descendants of the Dacians; Magyars in the West, and Szekelys in the East and North. I am going among the latter, who claim to be descended from Attila and the Huns. This may be so, for when the Magyars conquered the country in the eleventh century they found the Huns settled in it.I read that every known superstition in the world is gathered into the horseshoe of the Carpathians, as if it were the centre of some sort of imaginative whirlpool; if so my stay may be very interesting. (Mem., I must ask the Count all about them.)I did not sleep well, though my bed was comfortable enough, for I had all sorts of queer dreams. There was a dog howling all night under my window, which may have had something to do with it; or it may have been the paprika, for I had to drink up all the water in my carafe, and was still thirsty. Towards morning I slept and was wakened by the continuous knocking at my door, so I guess I must have been sleeping soundly then.',
    createdAt: new Date(),
    updatedAt: new Date(),
    genreId: 1
  },
  {
    authorId: 3,
    title: 'Frankenstein',
    body: 'Letter 1 To Mrs. Saville, England 1 St. Petersburgh, Dec. 11th, 17— 1 You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking 1 I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There—for with your leave, my sister, I will put some trust in preceding navigators—there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe. Its productions and features may be without example, as the phenomena of the heavenly bodies undoubtedly are in those undiscovered solitudes. What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent for ever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river. But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine 1 These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillise the mind as a steady purpose—a point on which the soul may fix its intellectual eye. This expedition has been the favourite dream of my early years. I have read with ardour the accounts of the various voyages which have been made in the prospect of arriving at the North Pacific Ocean through the seas which surround the pole. You may remember that a history of all the voyages made for purposes of discovery composed the whole of our good Uncle Thomas' library. My education was neglected, yet I was passionately fond of reading. These volumes were my study day and night, and my familiarity with them increased that regret which I had felt, as a child, on learning that my father's dying injunction had forbidden my uncle to allow me to embark in a seafaring life.These visions faded when I perused, for the first time, those poets whose effusions entranced my soul and lifted it to heaven. I also became a poet and for one year lived in a paradise of my own creation; I imagined that I also might obtain a niche in the temple where the names of Homer and Shakespeare are consecrated. You are well acquainted with my failure and how heavily I bore the disappointment. But just at that time I inherited the fortune of my cousin, and my thoughts were turned into the channel of their earlier bent.',
    createdAt: new Date(),
    updatedAt: new Date(),
    genreId: 1
  },
  {
    authorId: 3,
    title: 'My Immortal',
    body: 'Chapter 1.AN: Special fangz (get it, coz Im goffik) 2 my gf (ew not in that way) raven, bloodytearz666 4 helpin me wif da story and spelling. U rok! Justin ur da luv of my deprzzing life u rok 2! MCR ROX!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXHi my name is Ebony Dark\'ness Dementia Raven Way and I have long ebony black hair (that\'s how I got my name) with purple streaks and red tips that reaches my mid-back and icy blue eyes like limpid tears and a lot of people tell me I look like Amy Lee (AN: if u don\'t know who she is get da hell out of here!). I\'m not related to Gerard Way but I wish I was because he\'s a major hottie. I\'m a vampire but my teeth are straight and white. I have pale white skin. I\'m also a witch, and I go to a magic school called Hogwarts in England where I\'m in the seventh year (I\'m seventeen). I\'m a goth (in case you couldn\'t tell) and I wear mostly black. I love Hot Topic and I buy all my clothes from there. For example today I was wearing a black corset with matching lace around it and a black leather miniskirt, pink fishnets and black combat boots. I was wearing black lipstick, white foundation, black eyeliner and red eye shadow. I was walking outside Hogwarts. It was snowing and raining so there was no sun, which I was very happy about. A lot of preps stared at me. I put up my middle finger at them.“Hey Ebony!” shouted a voice. I looked up. It was…. Draco Malfoy!“What\'s up Draco?” I asked.“Nothing.” he said shyly.But then, I heard my friends call me and I had to go away.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXAN: IS it good? PLZ tell me fangz!',
    createdAt: new Date(),
    updatedAt: new Date(),
    genreId: 2
  },
  {
    authorId: 3,
    title: 'My Immortal',
    createdAt: new Date(),
    updatedAt: new Date(),
    genreId: 2
  },
   {
    authorId: 3,
    title: '2 Sentence Horror',
    body: 'The last man on Earth sat alone in a room. There was a knock on the door ...',
    createdAt: new Date(),
    updatedAt: new Date(),
    genreId: 5
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Stories', null, {});
  }
};
