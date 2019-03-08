require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Student = require('../models/student')


mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        dex: Student.create({
          name: 'Dexter',
          image: 'https://media.licdn.com/dms/image/C5603AQFYda9CS-F1mw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=-744tSmSZZKYjYFqtqxrq4-nR1GOhCQTDIywWXvJ5Cc',
          comment: 'Mike, coming to do this course has probably been the best decision I’ve made so far and that’s in no small part to your excellent attitude to teaching, your comical rants, and outlandish analogies. It’s been an insane 12 weeks and I’m definitely looking forward to the next 12. 😇',
          linkedin: 'https://www.linkedin.com/in/dexter-de-leon/'
        }),
        james: Student.create({
          name: 'James',
          image: 'https://media.licdn.com/dms/image/C4E03AQEgOiuzO0fCQg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=OBka3c73C4n9vRLZHubcZ-djeBEifxiMQrGTGV-GPi4',
          comment: 'Mike! It\'s been a long, difficult 12 weeks but you put up with us like a champ! Thanks for sharing your expert knowledge, apt analogies and tangential asides. James x x x',
          linkedin: 'https://www.linkedin.com/in/jjbenson/'
        }),
        seb: Student.create({
          name: 'Seb',
          image: 'https://media.licdn.com/dms/image/C5603AQF0W55KyN1rKQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=yQGE53pv2D2h5GqbQbWHwFwR2CkAdbJDX5UkQfvkPwU',
          comment: 'Mike! Your Jedi coding skills, have made these long 400+ hours over 12 weeks enjoyable! Thank-you for sharing your ideas, jokes and expert knowledge. I look forward to using & sharing the knowledge you passed to us with others and correcting indentation. May your code be strong and bug free my friend. Seb',
          linkedin: 'https://www.linkedin.com/in/sebastian-yeates/'
        }),
        beth: Student.create({
          name: 'Beth',
          image: 'https://media.licdn.com/dms/image/C4E03AQGz1Tj3aa038g/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=dqQ8b6kxSvxiq6pJZYCdsTOiT5FizZHgwW34CFi_rZE',
          comment: 'So I guess this is our way of saying that you definitely did a good job! Hopefully this website has lots of animations in it and this comment is being displayed in a modal as a symbol of our gratitude.... Love your banter and your mad analogies and your patience and your humour. You\'re definitely in the right job. All the best in the future, I hope we\'ll stay in touch. Will miss seeing you every day! Beth.',
          linkedin: 'https://www.linkedin.com/in/bethswingler/'
        }),
        bete: Student.create({
          name: 'Bete',
          image: 'https://media.licdn.com/dms/image/C5603AQFtaGEZIEWO5g/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=w3UsyS-9LIM8W009VxcErvzENh_pgXmLRxUPZ6dwPmc',
          comment: 'Hey Mike. You have honestly been so great! It\'s been an emotional but amazing journey, and I couldn\'t have wished for a better instructor. Thanks for being so patient with me and for being my part-time crossword buddy.',
          linkedin: 'https://www.linkedin.com/in/beteyemane/'
        }),
        ben: Student.create({
          name: 'Ben',
          image: 'https://media.licdn.com/dms/image/C4D03AQH2cx33iM6FHw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=WfIbw-2pj1GzTm1lv2I84yk3dpakNGpeqIS7q3X7UC4',
          comment: 'Mike, thanks so much for an absolutely incredible twelve weeks. You enthusiasm for code has been infections, and has made you a great teacher. Also, hope you make it through Brexit (that’s an aside). Ben',
          linkedin: 'https://www.linkedin.com/in/ben-lander/'
        }),
        ed: Student.create({
          name: 'Ed',
          image: 'https://media.licdn.com/dms/image/C5603AQFAjTK98t03gw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=Yz5xYZRrLEebbi_Llfp26SNVX21dpuBGH0FFGnKfmzc',
          comment: 'Mike, it’s been an emotional 12 weeks of ups, downs and coding dreams. Your passion for coding is so infectious and you’ve now turned me into one of those people who codes for ‘fun’, ...at the weekend. Serious though, thank you for everything you’ve done for me over the last few months, I can’t imagine my WDI experience without you. Look forward to buying you an Espresso Martini when I get a job. All the best, Ed',
          linkedin: 'https://www.linkedin.com/in/edward-lea-5a082a27/'
        }),
        josh: Student.create({
          name: 'Josh',
          image: 'https://media.licdn.com/dms/image/C5603AQF3lCu-ZRVsbQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=_Uald_kpCaEYKKte2pSc5D4t2UJd6ryoGXuozNTd_Lw',
          comment: `Yo Mike, thanks for everything you've taught and shared with us. It was a great 12 weeks
          and I looked forward to coming in every day. We're your favorite class right? 😁`,
          linkedin: 'https://www.linkedin.com/in/joshua-king-56775615a/'
        }),
        sid: Student.create({
          name: 'Sid',
          image: 'https://media.licdn.com/dms/image/C4D03AQHQBBfe9YzF-g/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=TGidCGzqezGXE26WZegPK2ZflZaWqxBTvVv6X4WBTOc',
          comment: 'Mike, It\'s been an amazing 12 weeks thanks for everything, you have been the best instructor and I couldn\'t ask for anyone better.',
          linkedin: 'https://www.linkedin.com/in/siddant-gurung-3aa570143/'
        }),
        charlotte: Student.create({
          name: 'Charlotte',
          image: 'https://media.licdn.com/dms/image/C4E03AQFaJHgOnJSs0w/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=b62Fi8ISLYUC1hoz1PXghbZvUW0iBent1KegVFHYm3I',
          comment: 'Mike, thank you for always encouraging me and giving me confidence with code that I never thought I would have. Luckily we have the next 3 months to continue to wind each other up...👻',
          linkedin: 'https://www.linkedin.com/in/charlotte-morgan-32130776/'
        }),
        tom: Student.create({
          name: 'Tom',
          image: 'https://media.licdn.com/dms/image/C5603AQFsGw9jjDBbqQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=Uo9h-gt4-EdeX57ZaZJ3xqGD_xTCbLLjn8a2DjmOEjQ',
          comment: `Alright John!! It has been a rollercoaster of emotions, but I would not have wanted it any other way.
          Thanks for your knowledge and your patience. Look after Charlotte for me.

          ⭐️⭐️⭐️⭐️⭐️ - would recommend.`,
          linkedin: 'https://www.linkedin.com/in/tom-abbott-6192a784/'
        }),
        alessandro: Student.create({
          name: 'Alessandro',
          image: 'https://media.licdn.com/dms/image/C5603AQHK7G01TUkBLQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=kqH0RH5rp8fq0kCN2Hv8B3bZkEqEXukN34n43rnOvGw',
          comment: 'Thank you Mike, you are super! I really enjoyed the course. Thank you for having shared your knowledge and passion with us, and for all the support given through these intense 12 weeks. You helped us building good essentials  for our future careers. Ciao, Alessandro',
          linkedin: 'https://www.linkedin.com/in/alessandrolepri/'
        }),
        gessica: Student.create({
          name: 'Gessica',
          image: 'https://media.licdn.com/dms/image/C5603AQH7qtNDZ_UPjg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=u4xsT4sph7T5jF4TffJqSuAuCsGb23HnnwZ5ToEJ0JU',
          comment: 'Mike, Thank you for all your help throughout this journey. Your passion for coding has made this course much easier and you have transferred this passion to me. I hope that you will always remember this crazy woman and that we will see again soon.',
          linkedin: 'https://www.linkedin.com/in/gessica-santoro/'
        }),
        lauren: Student.create({
          name: 'Lauren',
          image: 'https://media.licdn.com/dms/image/C4E03AQF145e4tmz-NQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=fb1JJfDA0ynXlDOzhT_T0FwtV69ApGclwpcZEFjAu68',
          comment: 'Thanks Mike for a thoroughly enjoying course. It has been a big challenge for me with a few ups and downs, but I have enjoyed it all. You are a great teacher and an inspiration to us all!',
          linkedin: 'https://www.linkedin.com/in/lauren-rachel-bell/'
        }),
        nawal: Student.create({
          name: 'Nawal',
          image: 'https://media.licdn.com/dms/image/C4D03AQFBYwMPOctShw/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=v4hhkHGuTCSwhRuARnqOkqdMfmYMez_Bm2dD6RY8dNY',
          comment: 'Yo Bboy Mike, thanks for making this past 12 weeks super fun! You’ve put up with all the ups and downs and encouraged me to learn more. I am grateful for your help through out this amazing coding journey! I’ll take it away all the knowledge and build some SICK! APPS Bruv... Take Care &  Keep Breaking Moves at JuJu’s!!! 🕺',
          linkedin: 'https://www.linkedin.com/in/nawal-gurung/'
        }),
        jeremy: Student.create({
          name: 'Jeremy',
          image: 'https://media.licdn.com/dms/image/C5603AQHaccFGxqbBvQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=TydtWYeC_SYdfDCKSDBxv903RdyDbDF39kE504A-Y8Q',
          comment: 'Bah oui, je sais, c’est ca…',
          linkedin: 'https://www.linkedin.com/in/jeremygiraudet/'
        }),
        begona: Student.create({
          name: 'Begona',
          image: 'https://media.licdn.com/dms/image/C4D03AQGmHfRbcXexlg/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=eUmMm5hz0xZU0-KnjUg_AE7nBzbYlel1609lQW-YqCY',
          comment: 'Begona comment',
          linkedin: 'https://www.linkedin.com/in/begoname/'
        }),
        mike: Student.create({
          name: 'Mike',
          image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/37745263_10216744274150390_5234780035277127680_n.jpg?_nc_cat=110&_nc_ht=scontent-lhr3-1.xx&oh=333ed400ed0723868952fda538bbf024&oe=5D26F7CF',
          comment: 'Mike, my namesake. It\'s been a great few months, I\'ve learnt a lot and have really appreciated your help over these intense weeks, so thank you! Hope the the next group works out well for you and no doubt I\'ll see you in the not-too-distant future (at Juju\'s most likely...).',
          linkedin: 'https://www.linkedin.com/in/michael-simmonds-83613b92'
        })
      })

        .then(() => console.log('Seeds sown 🌱'))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close())
    })
})
