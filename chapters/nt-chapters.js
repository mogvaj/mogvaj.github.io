var url = "https://media2.ldscdn.org/assets/scriptures/the-new-testament/";

var bookFiles = [
    "2015-11-0010-matthew-01-male-voice-64k-eng.mp3",
    "2015-11-0020-matthew-02-male-voice-64k-eng.mp3",
    "2015-11-0030-matthew-03-male-voice-64k-eng.mp3",
    "2015-11-0040-matthew-04-male-voice-64k-eng.mp3",
    "2015-11-0050-matthew-05-male-voice-64k-eng.mp3",
    "2015-11-0060-matthew-06-male-voice-64k-eng.mp3",
    "2015-11-0070-matthew-07-male-voice-64k-eng.mp3",
    "2015-11-0080-matthew-08-male-voice-64k-eng.mp3",
    "2015-11-0090-matthew-09-male-voice-64k-eng.mp3",
    "2015-11-0100-matthew-10-male-voice-64k-eng.mp3",
    "2015-11-0110-matthew-11-male-voice-64k-eng.mp3",
    "2015-11-0120-matthew-12-male-voice-64k-eng.mp3",
    "2015-11-0130-matthew-13-male-voice-64k-eng.mp3",
    "2015-11-0140-matthew-14-male-voice-64k-eng.mp3",
    "2015-11-0150-matthew-15-male-voice-64k-eng.mp3",
    "2015-11-0160-matthew-16-male-voice-64k-eng.mp3",
    "2015-11-0170-matthew-17-male-voice-64k-eng.mp3",
    "2015-11-0180-matthew-18-male-voice-64k-eng.mp3",
    "2015-11-0190-matthew-19-male-voice-64k-eng.mp3",
    "2015-11-0200-matthew-20-male-voice-64k-eng.mp3",
    "2015-11-0210-matthew-21-male-voice-64k-eng.mp3",
    "2015-11-0220-matthew-22-male-voice-64k-eng.mp3",
    "2015-11-0230-matthew-23-male-voice-64k-eng.mp3",
    "2015-11-0240-matthew-24-male-voice-64k-eng.mp3",
    "2015-11-0250-matthew-25-male-voice-64k-eng.mp3",
    "2015-11-0260-matthew-26-male-voice-64k-eng.mp3",
    "2015-11-0270-matthew-27-male-voice-64k-eng.mp3",
    "2015-11-0280-matthew-28-male-voice-64k-eng.mp3",

    "2015-11-0290-mark-01-male-voice-64k-eng.mp3",
    "2015-11-0300-mark-02-male-voice-64k-eng.mp3",
    "2015-11-0310-mark-03-male-voice-64k-eng.mp3",
    "2015-11-0320-mark-04-male-voice-64k-eng.mp3",
    "2015-11-0330-mark-05-male-voice-64k-eng.mp3",
    "2015-11-0340-mark-06-male-voice-64k-eng.mp3",
    "2015-11-0350-mark-07-male-voice-64k-eng.mp3",
    "2015-11-0360-mark-08-male-voice-64k-eng.mp3",
    "2015-11-0370-mark-09-male-voice-64k-eng.mp3",
    "2015-11-0380-mark-10-male-voice-64k-eng.mp3",
    "2015-11-0390-mark-11-male-voice-64k-eng.mp3",
    "2015-11-0400-mark-12-male-voice-64k-eng.mp3",
    "2015-11-0410-mark-13-male-voice-64k-eng.mp3",
    "2015-11-0420-mark-14-male-voice-64k-eng.mp3",
    "2015-11-0430-mark-15-male-voice-64k-eng.mp3",
    "2015-11-0440-mark-16-male-voice-64k-eng.mp3",

    "2015-11-0450-luke-01-male-voice-64k-eng.mp3",
    "2015-11-0460-luke-02-male-voice-64k-eng.mp3",
    "2015-11-0470-luke-03-male-voice-64k-eng.mp3",
    "2015-11-0480-luke-04-male-voice-64k-eng.mp3",
    "2015-11-0490-luke-05-male-voice-64k-eng.mp3",
    "2015-11-0500-luke-06-male-voice-64k-eng.mp3",
    "2015-11-0510-luke-07-male-voice-64k-eng.mp3",
    "2015-11-0520-luke-08-male-voice-64k-eng.mp3",
    "2015-11-0530-luke-09-male-voice-64k-eng.mp3",
    "2015-11-0540-luke-10-male-voice-64k-eng.mp3",
    "2015-11-0550-luke-11-male-voice-64k-eng.mp3",
    "2015-11-0560-luke-12-male-voice-64k-eng.mp3",
    "2015-11-0570-luke-13-male-voice-64k-eng.mp3",
    "2015-11-0580-luke-14-male-voice-64k-eng.mp3",
    "2015-11-0590-luke-15-male-voice-64k-eng.mp3",
    "2015-11-0600-luke-16-male-voice-64k-eng.mp3",
    "2015-11-0610-luke-17-male-voice-64k-eng.mp3",
    "2015-11-0620-luke-18-male-voice-64k-eng.mp3",
    "2015-11-0630-luke-19-male-voice-64k-eng.mp3",
    "2015-11-0640-luke-20-male-voice-64k-eng.mp3",
    "2015-11-0650-luke-21-male-voice-64k-eng.mp3",
    "2015-11-0660-luke-22-male-voice-64k-eng.mp3",
    "2015-11-0670-luke-23-male-voice-64k-eng.mp3",
    "2015-11-0680-luke-24-male-voice-64k-eng.mp3",

];

var chapters = {
"matthew-01": `THE GOSPEL ACCORDING TO
ST MATTHEW
CHAPTER 1
Christ is born of Mary—She conceives by the power of the Holy Ghost—Our Lord is named Jesus.
1 The book of the generation of Jesus Christ, the son of David, the son of Abraham.
2 Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethren;
3 And Judas begat Phares and Zara of Thamar; and Phares begat Esrom; and Esrom begat Aram;
4 And Aram begat Aminadab; and Aminadab begat Naasson; and Naasson begat Salmon;
5 And Salmon begat Booz of Rachab; and Booz begat Obed of Ruth; and Obed begat Jesse;
6 And Jesse begat David the king; and David the king begat Solomon of her that had been the wife of Urias;
7 And Solomon begat Roboam; and Roboam begat Abia; and Abia begat Asa;
8 And Asa begat Josaphat; and Josaphat begat Joram; and Joram begat Ozias;
9 And Ozias begat Joatham; and Joatham begat Achaz; and Achaz begat Ezekias;
10 And Ezekias begat Manasses; and Manasses begat Amon; and Amon begat Josias;
11 And Josias begat Jechonias and his brethren, about the time they were carried away to Babylon:
12 And after they were brought to Babylon, Jechonias begat Salathiel; and Salathiel begat Zorobabel;
13 And Zorobabel begat Abiud; and Abiud begat Eliakim; and Eliakim begat Azor;
14 And Azor begat Sadoc; and Sadoc begat Achim; and Achim begat Eliud;
15 And Eliud begat Eleazar; and Eleazar begat Matthan; and Matthan begat Jacob;
16 And Jacob begat Joseph the husband of Mary, of whom was born Jesus, who is called Christ.
17 So all the generations from Abraham to David are fourteen generations; and from David until the carrying away into Babylon are fourteen generations; and from the carrying away into Babylon unto Christ are fourteen generations.
18 ¶ Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost.
19 Then Joseph her husband, being a just man, and not willing to make her a publick example, was minded to put her away privily.
20 But while he thought on these things, behold, the angel of the Lord appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost.
21 And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.
22 Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying,
23 Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.
24 Then Joseph being raised from sleep did as the angel of the Lord had bidden him, and took unto him his wife:
25 And knew her not till she had brought forth her firstborn son: and he called his name JESUS.`,
"matthew-02": `CHAPTER 2
The wise men are directed by a star to Jesus—Joseph takes the child to Egypt—Herod slays the children in Bethlehem—Jesus is taken to Nazareth to dwell.
1 Now when Jesus was born in Bethlehem of Judæa in the days of Herod the king, behold, there came wise men from the east to Jerusalem,
2 Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.
3 When Herod the king had heard these things, he was troubled, and all Jerusalem with him.
4 And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born.
5 And they said unto him, In Bethlehem of Judæa: for thus it is written by the prophet,
6 And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.
7 Then Herod, when he had privily called the wise men, inquired of them diligently what time the star appeared.
8 And he sent them to Bethlehem, and said, Go and search diligently for the young child; and when ye have found him, bring me word again, that I may come and worship him also.
9 When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was.
10 When they saw the star, they rejoiced with exceeding great joy.
11 ¶ And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh.
12 And being warned of God in a dream that they should not return to Herod, they departed into their own country another way.
13 And when they were departed, behold, the angel of the Lord appeareth to Joseph in a dream, saying, Arise, and take the young child and his mother, and flee into Egypt, and be thou there until I bring thee word: for Herod will seek the young child to destroy him.
14 When he arose, he took the young child and his mother by night, and departed into Egypt:
15 And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.
16 ¶ Then Herod, when he saw that he was mocked of the wise men, was exceeding wroth, and sent forth, and slew all the children that were in Bethlehem, and in all the coasts thereof, from two years old and under, according to the time which he had diligently inquired of the wise men.
17 Then was fulfilled that which was spoken by Jeremy the prophet, saying,
18 In Rama was there a voice heard, lamentation, and weeping, and great mourning, Rachel weeping for her children, and would not be comforted, because they are not.
19 ¶ But when Herod was dead, behold, an angel of the Lord appeareth in a dream to Joseph in Egypt,
20 Saying, Arise, and take the young child and his mother, and go into the land of Israel: for they are dead which sought the young child’s life.
21 And he arose, and took the young child and his mother, and came into the land of Israel.
22 But when he heard that Archelaus did reign in Judæa in the room of his father Herod, he was afraid to go thither: notwithstanding, being warned of God in a dream, he turned aside into the parts of Galilee:
23 And he came and dwelt in a city called Nazareth: that it might be fulfilled which was spoken by the prophets, He shall be called a Nazarene.`,
"matthew-03": `CHAPTER 3
John the Baptist preaches in Judæa—Jesus is baptized, and the Father acclaims Him as His Beloved Son.
1 In those days came John the Baptist, preaching in the wilderness of Judæa,
2 And saying, Repent ye: for the kingdom of heaven is at hand.
3 For this is he that was spoken of by the prophet Esaias, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.
4 And the same John had his raiment of camel’s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.
5 Then went out to him Jerusalem, and all Judæa, and all the region round about Jordan,
6 And were baptized of him in Jordan, confessing their sins.
7 ¶ But when he saw many of the Pharisees and Sadducees come to his baptism, he said unto them, O generation of vipers, who hath warned you to flee from the wrath to come?
8 Bring forth therefore fruits meet for repentance:
9 And think not to say within yourselves, We have Abraham to our father: for I say unto you, that God is able of these stones to raise up children unto Abraham.
10 And now also the axe is laid unto the root of the trees: therefore every tree which bringeth not forth good fruit is hewn down, and cast into the fire.
11 I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire:
12 Whose fan is in his hand, and he will throughly purge his floor, and gather his wheat into the garner; but he will burn up the chaff with unquenchable fire.
13 ¶ Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him.
14 But John forbad him, saying, I have need to be baptized of thee, and comest thou to me?
15 And Jesus answering said unto him, Suffer it to be so now: for thus it becometh us to fulfil all righteousness. Then he suffered him.
16 And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him:
17 And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.`,
"matthew-04": `CHAPTER 4
Jesus fasts forty days and is tempted—He begins His ministry, calls disciples, and heals the sick.
1 Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil.
2 And when he had fasted forty days and forty nights, he was afterward an hungred.
3 And when the tempter came to him, he said, If thou be the Son of God, command that these stones be made bread.
4 But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.
5 Then the devil taketh him up into the holy city, and setteth him on a pinnacle of the temple,
6 And saith unto him, If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee: and in their hands they shall bear thee up, lest at any time thou dash thy foot against a stone.
7 Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God.
8 Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them;
9 And saith unto him, All these things will I give thee, if thou wilt fall down and worship me.
10 Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.
11 Then the devil leaveth him, and, behold, angels came and ministered unto him.
12 ¶ Now when Jesus had heard that John was cast into prison, he departed into Galilee;
13 And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:
14 That it might be fulfilled which was spoken by Esaias the prophet, saying,
15 The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles;
16 The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.
17 ¶ From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.
18 ¶ And Jesus, walking by the sea of Galilee, saw two brethren, Simon called Peter, and Andrew his brother, casting a net into the sea: for they were fishers.
19 And he saith unto them, Follow me, and I will make you fishers of men.
20 And they straightway left their nets, and followed him.
21 And going on from thence, he saw other two brethren, James the son of Zebedee, and John his brother, in a ship with Zebedee their father, mending their nets; and he called them.
22 And they immediately left the ship and their father, and followed him.
23 ¶ And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom, and healing all manner of sickness and all manner of disease among the people.
24 And his fame went throughout all Syria: and they brought unto him all sick people that were taken with divers diseases and torments, and those which were possessed with devils, and those which were lunatic, and those that had the palsy; and he healed them.
25 And there followed him great multitudes of people from Galilee, and from Decapolis, and from Jerusalem, and from Judæa, and from beyond Jordan.`,
"matthew-05": `CHAPTER 5
Jesus preaches the Sermon on the Mount—Its teachings replace and transcend some aspects of the law of Moses—All are commanded to be perfect like their Father in Heaven.
1 And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:
2 And he opened his mouth, and taught them, saying,
3 Blessed are the poor in spirit: for theirs is the kingdom of heaven.
4 Blessed are they that mourn: for they shall be comforted.
5 Blessed are the meek: for they shall inherit the earth.
6 Blessed are they which do hunger and thirst after righteousness: for they shall be filled.
7 Blessed are the merciful: for they shall obtain mercy.
8 Blessed are the pure in heart: for they shall see God.
9 Blessed are the peacemakers: for they shall be called the children of God.
10 Blessed are they which are persecuted for righteousness’ sake: for theirs is the kingdom of heaven.
11 Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake.
12 Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.
13 ¶ Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.
14 Ye are the light of the world. A city that is set on an hill cannot be hid.
15 Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.
16 Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.
17 ¶ Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.
18 For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.
19 Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.
20 For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven.
21 ¶ Ye have heard that it was said by them of old time, Thou shalt not kill; and whosoever shall kill shall be in danger of the judgment:
22 But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.
23 Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee;
24 Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.
25 Agree with thine adversary quickly, whiles thou art in the way with him; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.
26 Verily I say unto thee, Thou shalt by no means come out thence, till thou hast paid the uttermost farthing.
27 ¶ Ye have heard that it was said by them of old time, Thou shalt not commit adultery:
28 But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.
29 And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.
30 And if thy right hand offend thee, cut it off, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.
31 It hath been said, Whosoever shall put away his wife, let him give her a writing of divorcement:
32 But I say unto you, That whosoever shall put away his wife, saving for the cause of fornication, causeth her to commit adultery: and whosoever shall marry her that is divorced committeth adultery.
33 ¶ Again, ye have heard that it hath been said by them of old time, Thou shalt not forswear thyself, but shalt perform unto the Lord thine oaths:
34 But I say unto you, Swear not at all; neither by heaven; for it is God’s throne:
35 Nor by the earth; for it is his footstool: neither by Jerusalem; for it is the city of the great King.
36 Neither shalt thou swear by thy head, because thou canst not make one hair white or black.
37 But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.
38 ¶ Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth:
39 But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.
40 And if any man will sue thee at the law, and take away thy coat, let him have thy cloak also.
41 And whosoever shall compel thee to go a mile, go with him twain.
42 Give to him that asketh thee, and from him that would borrow of thee turn not thou away.
43 ¶ Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy.
44 But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;
45 That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.
46 For if ye love them which love you, what reward have ye? do not even the publicans the same?
47 And if ye salute your brethren only, what do ye more than others? do not even the publicans so?
48 Be ye therefore perfect, even as your Father which is in heaven is perfect.`,
"matthew-06": `CHAPTER 6
Jesus continues the Sermon on the Mount—He teaches the disciples the Lord’s Prayer—They are commanded to seek first the kingdom of God and His righteousness.
1 Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.
2 Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward.
3 But when thou doest alms, let not thy left hand know what thy right hand doeth:
4 That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly.
5 ¶ And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward.
6 But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.
7 But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking.
8 Be not ye therefore like unto them: for your Father knoweth what things ye have need of, before ye ask him.
9 After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.
10 Thy kingdom come. Thy will be done in earth, as it is in heaven.
11 Give us this day our daily bread.
12 And forgive us our debts, as we forgive our debtors.
13 And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.
14 For if ye forgive men their trespasses, your heavenly Father will also forgive you:
15 But if ye forgive not men their trespasses, neither will your Father forgive your trespasses.
16 ¶ Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward.
17 But thou, when thou fastest, anoint thine head, and wash thy face;
18 That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.
19 ¶ Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:
20 But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:
21 For where your treasure is, there will your heart be also.
22 The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light.
23 But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in thee be darkness, how great is that darkness!
24 ¶ No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.
25 Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?
26 Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?
27 Which of you by taking thought can add one cubit unto his stature?
28 And why take ye thought for raiment? Consider the lilies of the field, how they grow; they toil not, neither do they spin:
29 And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these.
30 Wherefore, if God so clothe the grass of the field, which to day is, and to morrow is cast into the oven, shall he not much more clothe you, O ye of little faith?
31 Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed?
32 (For after all these things do the Gentiles seek:) for your heavenly Father knoweth that ye have need of all these things.
33 But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.
34 Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.`,
"matthew-07": `CHAPTER 7
Jesus concludes the Sermon on the Mount—He commands, Judge not; ask of God; beware of false prophets—He promises salvation to those who do the will of the Father.
1 Judge not, that ye be not judged.
2 For with what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.
3 And why beholdest thou the mote that is in thy brother’s eye, but considerest not the beam that is in thine own eye?
4 Or how wilt thou say to thy brother, Let me pull out the mote out of thine eye; and, behold, a beam is in thine own eye?
5 Thou hypocrite, first cast out the beam out of thine own eye; and then shalt thou see clearly to cast out the mote out of thy brother’s eye.
6 ¶ Give not that which is holy unto the dogs, neither cast ye your pearls before swine, lest they trample them under their feet, and turn again and rend you.
7 ¶ Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:
8 For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.
9 Or what man is there of you, whom if his son ask bread, will he give him a stone?
10 Or if he ask a fish, will he give him a serpent?
11 If ye then, being evil, know how to give good gifts unto your children, how much more shall your Father which is in heaven give good things to them that ask him?
12 Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.
13 ¶ Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:
14 Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.
15 ¶ Beware of false prophets, which come to you in sheep’s clothing, but inwardly they are ravening wolves.
16 Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?
17 Even so every good tree bringeth forth good fruit; but a corrupt tree bringeth forth evil fruit.
18 A good tree cannot bring forth evil fruit, neither can a corrupt tree bring forth good fruit.
19 Every tree that bringeth not forth good fruit is hewn down, and cast into the fire.
20 Wherefore by their fruits ye shall know them.
21 ¶ Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.
22 Many will say to me in that day, Lord, Lord, have we not prophesied in thy name? and in thy name have cast out devils? and in thy name done many wonderful works?
23 And then will I profess unto them, I never knew you: depart from me, ye that work iniquity.
24 ¶ Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock:
25 And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.
26 And every one that heareth these sayings of mine, and doeth them not, shall be likened unto a foolish man, which built his house upon the sand:
27 And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell: and great was the fall of it.
28 And it came to pass, when Jesus had ended these sayings, the people were astonished at his doctrine:
29 For he taught them as one having authority, and not as the scribes.`,
"matthew-08": `CHAPTER 8
Jesus heals a leper, cures the centurion’s servant and others, stills the tempest, and casts out devils—The devils enter a herd of swine.
1 When he was come down from the mountain, great multitudes followed him.
2 And, behold, there came a leper and worshipped him, saying, Lord, if thou wilt, thou canst make me clean.
3 And Jesus put forth his hand, and touched him, saying, I will; be thou clean. And immediately his leprosy was cleansed.
4 And Jesus saith unto him, See thou tell no man; but go thy way, shew thyself to the priest, and offer the gift that Moses commanded, for a testimony unto them.
5 ¶ And when Jesus was entered into Capernaum, there came unto him a centurion, beseeching him,
6 And saying, Lord, my servant lieth at home sick of the palsy, grievously tormented.
7 And Jesus saith unto him, I will come and heal him.
8 The centurion answered and said, Lord, I am not worthy that thou shouldest come under my roof: but speak the word only, and my servant shall be healed.
9 For I am a man under authority, having soldiers under me: and I say to this man, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it.
10 When Jesus heard it, he marvelled, and said to them that followed, Verily I say unto you, I have not found so great faith, no, not in Israel.
11 And I say unto you, That many shall come from the east and west, and shall sit down with Abraham, and Isaac, and Jacob, in the kingdom of heaven.
12 But the children of the kingdom shall be cast out into outer darkness: there shall be weeping and gnashing of teeth.
13 And Jesus said unto the centurion, Go thy way; and as thou hast believed, so be it done unto thee. And his servant was healed in the selfsame hour.
14 ¶ And when Jesus was come into Peter’s house, he saw his wife’s mother laid, and sick of a fever.
15 And he touched her hand, and the fever left her: and she arose, and ministered unto them.
16 ¶ When the even was come, they brought unto him many that were possessed with devils: and he cast out the spirits with his word, and healed all that were sick:
17 That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.
18 ¶ Now when Jesus saw great multitudes about him, he gave commandment to depart unto the other side.
19 And a certain scribe came, and said unto him, Master, I will follow thee whithersoever thou goest.
20 And Jesus saith unto him, The foxes have holes, and the birds of the air have nests; but the Son of man hath not where to lay his head.
21 And another of his disciples said unto him, Lord, suffer me first to go and bury my father.
22 But Jesus said unto him, Follow me; and let the dead bury their dead.
23 ¶ And when he was entered into a ship, his disciples followed him.
24 And, behold, there arose a great tempest in the sea, insomuch that the ship was covered with the waves: but he was asleep.
25 And his disciples came to him, and awoke him, saying, Lord, save us: we perish.
26 And he saith unto them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm.
27 But the men marvelled, saying, What manner of man is this, that even the winds and the sea obey him!
28 ¶ And when he was come to the other side into the country of the Gergesenes, there met him two possessed with devils, coming out of the tombs, exceeding fierce, so that no man might pass by that way.
29 And, behold, they cried out, saying, What have we to do with thee, Jesus, thou Son of God? art thou come hither to torment us before the time?
30 And there was a good way off from them an herd of many swine feeding.
31 So the devils besought him, saying, If thou cast us out, suffer us to go away into the herd of swine.
32 And he said unto them, Go. And when they were come out, they went into the herd of swine: and, behold, the whole herd of swine ran violently down a steep place into the sea, and perished in the waters.
33 And they that kept them fled, and went their ways into the city, and told every thing, and what was befallen to the possessed of the devils.
34 And, behold, the whole city came out to meet Jesus: and when they saw him, they besought him that he would depart out of their coasts.`,
"matthew-09": `CHAPTER 9
Jesus forgives sins, heals a paralytic, and calls Matthew—Jesus eats with sinners, heals a woman who touches His garments, and raises Jairus’s daughter to life—He opens the eyes of the blind, casts out a devil, and preaches the gospel.
1 And he entered into a ship, and passed over, and came into his own city.
2 And, behold, they brought to him a man sick of the palsy, lying on a bed: and Jesus seeing their faith said unto the sick of the palsy; Son, be of good cheer; thy sins be forgiven thee.
3 And, behold, certain of the scribes said within themselves, This man blasphemeth.
4 And Jesus knowing their thoughts said, Wherefore think ye evil in your hearts?
5 For whether is easier, to say, Thy sins be forgiven thee; or to say, Arise, and walk?
6 But that ye may know that the Son of man hath power on earth to forgive sins, (then saith he to the sick of the palsy,) Arise, take up thy bed, and go unto thine house.
7 And he arose, and departed to his house.
8 But when the multitudes saw it, they marvelled, and glorified God, which had given such power unto men.
9 ¶ And as Jesus passed forth from thence, he saw a man, named Matthew, sitting at the receipt of custom: and he saith unto him, Follow me. And he arose, and followed him.
10 ¶ And it came to pass, as Jesus sat at meat in the house, behold, many publicans and sinners came and sat down with him and his disciples.
11 And when the Pharisees saw it, they said unto his disciples, Why eateth your Master with publicans and sinners?
12 But when Jesus heard that, he said unto them, They that be whole need not a physician, but they that are sick.
13 But go ye and learn what that meaneth, I will have mercy, and not sacrifice: for I am not come to call the righteous, but sinners to repentance.
14 ¶ Then came to him the disciples of John, saying, Why do we and the Pharisees fast oft, but thy disciples fast not?
15 And Jesus said unto them, Can the children of the bridechamber mourn, as long as the bridegroom is with them? but the days will come, when the bridegroom shall be taken from them, and then shall they fast.
16 No man putteth a piece of new cloth unto an old garment, for that which is put in to fill it up taketh from the garment, and the rent is made worse.
17 Neither do men put new wine into old bottles: else the bottles break, and the wine runneth out, and the bottles perish: but they put new wine into new bottles, and both are preserved.
18 ¶ While he spake these things unto them, behold, there came a certain ruler, and worshipped him, saying, My daughter is even now dead: but come and lay thy hand upon her, and she shall live.
19 And Jesus arose, and followed him, and so did his disciples.
20 ¶ And, behold, a woman, which was diseased with an issue of blood twelve years, came behind him, and touched the hem of his garment:
21 For she said within herself, If I may but touch his garment, I shall be whole.
22 But Jesus turned him about, and when he saw her, he said, Daughter, be of good comfort; thy faith hath made thee whole. And the woman was made whole from that hour.
23 And when Jesus came into the ruler’s house, and saw the minstrels and the people making a noise,
24 He said unto them, Give place: for the maid is not dead, but sleepeth. And they laughed him to scorn.
25 But when the people were put forth, he went in, and took her by the hand, and the maid arose.
26 And the fame hereof went abroad into all that land.
27 ¶ And when Jesus departed thence, two blind men followed him, crying, and saying, Thou Son of David, have mercy on us.
28 And when he was come into the house, the blind men came to him: and Jesus saith unto them, Believe ye that I am able to do this? They said unto him, Yea, Lord.
29 Then touched he their eyes, saying, According to your faith be it unto you.
30 And their eyes were opened; and Jesus straitly charged them, saying, See that no man know it.
31 But they, when they were departed, spread abroad his fame in all that country.
32 ¶ As they went out, behold, they brought to him a dumb man possessed with a devil.
33 And when the devil was cast out, the dumb spake: and the multitudes marvelled, saying, It was never so seen in Israel.
34 But the Pharisees said, He casteth out devils through the prince of the devils.
35 And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.
36 ¶ But when he saw the multitudes, he was moved with compassion on them, because they fainted, and were scattered abroad, as sheep having no shepherd.
37 Then saith he unto his disciples, The harvest truly is plenteous, but the labourers are few;
38 Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.`,
"matthew-10": `CHAPTER 10
Jesus instructs and empowers the Twelve Apostles and sends them forth to preach, minister, and heal the sick—Those who receive the Twelve receive the Lord.
1 And when he had called unto him his twelve disciples, he gave them power against unclean spirits, to cast them out, and to heal all manner of sickness and all manner of disease.
2 Now the names of the twelve apostles are these; The first, Simon, who is called Peter, and Andrew his brother; James the son of Zebedee, and John his brother;
3 Philip, and Bartholomew; Thomas, and Matthew the publican; James the son of Alphæus, and Lebbæus, whose surname was Thaddæus;
4 Simon the Canaanite, and Judas Iscariot, who also betrayed him.
5 These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not:
6 But go rather to the lost sheep of the house of Israel.
7 And as ye go, preach, saying, The kingdom of heaven is at hand.
8 Heal the sick, cleanse the lepers, raise the dead, cast out devils: freely ye have received, freely give.
9 Provide neither gold, nor silver, nor brass in your purses,
10 Nor scrip for your journey, neither two coats, neither shoes, nor yet staves: for the workman is worthy of his meat.
11 And into whatsoever city or town ye shall enter, inquire who in it is worthy; and there abide till ye go thence.
12 And when ye come into an house, salute it.
13 And if the house be worthy, let your peace come upon it: but if it be not worthy, let your peace return to you.
14 And whosoever shall not receive you, nor hear your words, when ye depart out of that house or city, shake off the dust of your feet.
15 Verily I say unto you, It shall be more tolerable for the land of Sodom and Gomorrha in the day of judgment, than for that city.
16 ¶ Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves.
17 But beware of men: for they will deliver you up to the councils, and they will scourge you in their synagogues;
18 And ye shall be brought before governors and kings for my sake, for a testimony against them and the Gentiles.
19 But when they deliver you up, take no thought how or what ye shall speak: for it shall be given you in that same hour what ye shall speak.
20 For it is not ye that speak, but the Spirit of your Father which speaketh in you.
21 And the brother shall deliver up the brother to death, and the father the child: and the children shall rise up against their parents, and cause them to be put to death.
22 And ye shall be hated of all men for my name’s sake: but he that endureth to the end shall be saved.
23 But when they persecute you in this city, flee ye into another: for verily I say unto you, Ye shall not have gone over the cities of Israel, till the Son of man be come.
24 The disciple is not above his master, nor the servant above his lord.
25 It is enough for the disciple that he be as his master, and the servant as his lord. If they have called the master of the house Beelzebub, how much more shall they call them of his household?
26 Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known.
27 What I tell you in darkness, that speak ye in light: and what ye hear in the ear, that preach ye upon the housetops.
28 And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell.
29 Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father.
30 But the very hairs of your head are all numbered.
31 Fear ye not therefore, ye are of more value than many sparrows.
32 Whosoever therefore shall confess me before men, him will I confess also before my Father which is in heaven.
33 But whosoever shall deny me before men, him will I also deny before my Father which is in heaven.
34 Think not that I am come to send peace on earth: I came not to send peace, but a sword.
35 For I am come to set a man at variance against his father, and the daughter against her mother, and the daughter in law against her mother in law.
36 And a man’s foes shall be they of his own household.
37 He that loveth father or mother more than me is not worthy of me: and he that loveth son or daughter more than me is not worthy of me.
38 And he that taketh not his cross, and followeth after me, is not worthy of me.
39 He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.
40 ¶ He that receiveth you receiveth me, and he that receiveth me receiveth him that sent me.
41 He that receiveth a prophet in the name of a prophet shall receive a prophet’s reward; and he that receiveth a righteous man in the name of a righteous man shall receive a righteous man’s reward.
42 And whosoever shall give to drink unto one of these little ones a cup of cold water only in the name of a disciple, verily I say unto you, he shall in no wise lose his reward.`,
"matthew-11": `CHAPTER 11
Jesus acclaims John as more than a prophet—The cities of Chorazin, Bethsaida, and Capernaum are rebuked for unbelief—The Son reveals the Father—The yoke of Christ is easy, and His burden is light.
1 And it came to pass, when Jesus had made an end of commanding his twelve disciples, he departed thence to teach and to preach in their cities.
2 Now when John had heard in the prison the works of Christ, he sent two of his disciples,
3 And said unto him, Art thou he that should come, or do we look for another?
4 Jesus answered and said unto them, Go and shew John again those things which ye do hear and see:
5 The blind receive their sight, and the lame walk, the lepers are cleansed, and the deaf hear, the dead are raised up, and the poor have the gospel preached to them.
6 And blessed is he, whosoever shall not be offended in me.
7 ¶ And as they departed, Jesus began to say unto the multitudes concerning John, What went ye out into the wilderness to see? A reed shaken with the wind?
8 But what went ye out for to see? A man clothed in soft raiment? behold, they that wear soft clothing are in kings’ houses.
9 But what went ye out for to see? A prophet? yea, I say unto you, and more than a prophet.
10 For this is he, of whom it is written, Behold, I send my messenger before thy face, which shall prepare thy way before thee.
11 Verily I say unto you, Among them that are born of women there hath not risen a greater than John the Baptist: notwithstanding he that is least in the kingdom of heaven is greater than he.
12 And from the days of John the Baptist until now the kingdom of heaven suffereth violence, and the violent take it by force.
13 For all the prophets and the law prophesied until John.
14 And if ye will receive it, this is Elias, which was for to come.
15 He that hath ears to hear, let him hear.
16 ¶ But whereunto shall I liken this generation? It is like unto children sitting in the markets, and calling unto their fellows,
17 And saying, We have piped unto you, and ye have not danced; we have mourned unto you, and ye have not lamented.
18 For John came neither eating nor drinking, and they say, He hath a devil.
19 The Son of man came eating and drinking, and they say, Behold a man gluttonous, and a winebibber, a friend of publicans and sinners. But wisdom is justified of her children.
20 ¶ Then began he to upbraid the cities wherein most of his mighty works were done, because they repented not:
21 Woe unto thee, Chorazin! woe unto thee, Bethsaida! for if the mighty works, which were done in you, had been done in Tyre and Sidon, they would have repented long ago in sackcloth and ashes.
22 But I say unto you, It shall be more tolerable for Tyre and Sidon at the day of judgment, than for you.
23 And thou, Capernaum, which art exalted unto heaven, shalt be brought down to hell: for if the mighty works, which have been done in thee, had been done in Sodom, it would have remained until this day.
24 But I say unto you, That it shall be more tolerable for the land of Sodom in the day of judgment, than for thee.
25 ¶ At that time Jesus answered and said, I thank thee, O Father, Lord of heaven and earth, because thou hast hid these things from the wise and prudent, and hast revealed them unto babes.
26 Even so, Father: for so it seemed good in thy sight.
27 All things are delivered unto me of my Father: and no man knoweth the Son, but the Father; neither knoweth any man the Father, save the Son, and he to whomsoever the Son will reveal him.
28 ¶ Come unto me, all ye that labour and are heavy laden, and I will give you rest.
29 Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.
30 For my yoke is easy, and my burden is light.`,
"matthew-12": `CHAPTER 12
Jesus proclaims Himself Lord of the Sabbath and heals on the Sabbath day—He is accused of casting out devils through the power of Beelzebub—He speaks of blasphemy against the Holy Ghost and says that an evil and adulterous generation seeks signs.
1 At that time Jesus went on the sabbath day through the corn; and his disciples were an hungred, and began to pluck the ears of corn, and to eat.
2 But when the Pharisees saw it, they said unto him, Behold, thy disciples do that which is not lawful to do upon the sabbath day.
3 But he said unto them, Have ye not read what David did, when he was an hungred, and they that were with him;
4 How he entered into the house of God, and did eat the shewbread, which was not lawful for him to eat, neither for them which were with him, but only for the priests?
5 Or have ye not read in the law, how that on the sabbath days the priests in the temple profane the sabbath, and are blameless?
6 But I say unto you, That in this place is one greater than the temple.
7 But if ye had known what this meaneth, I will have mercy, and not sacrifice, ye would not have condemned the guiltless.
8 For the Son of man is Lord even of the sabbath day.
9 And when he was departed thence, he went into their synagogue:
10 ¶ And, behold, there was a man which had his hand withered. And they asked him, saying, Is it lawful to heal on the sabbath days? that they might accuse him.
11 And he said unto them, What man shall there be among you, that shall have one sheep, and if it fall into a pit on the sabbath day, will he not lay hold on it, and lift it out?
12 How much then is a man better than a sheep? Wherefore it is lawful to do well on the sabbath days.
13 Then saith he to the man, Stretch forth thine hand. And he stretched it forth; and it was restored whole, like as the other.
14 ¶ Then the Pharisees went out, and held a council against him, how they might destroy him.
15 But when Jesus knew it, he withdrew himself from thence: and great multitudes followed him, and he healed them all;
16 And charged them that they should not make him known:
17 That it might be fulfilled which was spoken by Esaias the prophet, saying,
18 Behold my servant, whom I have chosen; my beloved, in whom my soul is well pleased: I will put my spirit upon him, and he shall shew judgment to the Gentiles.
19 He shall not strive, nor cry; neither shall any man hear his voice in the streets.
20 A bruised reed shall he not break, and smoking flax shall he not quench, till he send forth judgment unto victory.
21 And in his name shall the Gentiles trust.
22 ¶ Then was brought unto him one possessed with a devil, blind, and dumb: and he healed him, insomuch that the blind and dumb both spake and saw.
23 And all the people were amazed, and said, Is not this the son of David?
24 But when the Pharisees heard it, they said, This fellow doth not cast out devils, but by Beelzebub the prince of the devils.
25 And Jesus knew their thoughts, and said unto them, Every kingdom divided against itself is brought to desolation; and every city or house divided against itself shall not stand:
26 And if Satan cast out Satan, he is divided against himself; how shall then his kingdom stand?
27 And if I by Beelzebub cast out devils, by whom do your children cast them out? therefore they shall be your judges.
28 But if I cast out devils by the Spirit of God, then the kingdom of God is come unto you.
29 Or else how can one enter into a strong man’s house, and spoil his goods, except he first bind the strong man? and then he will spoil his house.
30 He that is not with me is against me; and he that gathereth not with me scattereth abroad.
31 ¶ Wherefore I say unto you, All manner of sin and blasphemy shall be forgiven unto men: but the blasphemy against the Holy Ghost shall not be forgiven unto men.
32 And whosoever speaketh a word against the Son of man, it shall be forgiven him: but whosoever speaketh against the Holy Ghost, it shall not be forgiven him, neither in this world, neither in the world to come.
33 Either make the tree good, and his fruit good; or else make the tree corrupt, and his fruit corrupt: for the tree is known by his fruit.
34 O generation of vipers, how can ye, being evil, speak good things? for out of the abundance of the heart the mouth speaketh.
35 A good man out of the good treasure of the heart bringeth forth good things: and an evil man out of the evil treasure bringeth forth evil things.
36 But I say unto you, That every idle word that men shall speak, they shall give account thereof in the day of judgment.
37 For by thy words thou shalt be justified, and by thy words thou shalt be condemned.
38 ¶ Then certain of the scribes and of the Pharisees answered, saying, Master, we would see a sign from thee.
39 But he answered and said unto them, An evil and adulterous generation seeketh after a sign; and there shall no sign be given to it, but the sign of the prophet Jonas:
40 For as Jonas was three days and three nights in the whale’s belly; so shall the Son of man be three days and three nights in the heart of the earth.
41 The men of Nineveh shall rise in judgment with this generation, and shall condemn it: because they repented at the preaching of Jonas; and, behold, a greater than Jonas is here.
42 The queen of the south shall rise up in the judgment with this generation, and shall condemn it: for she came from the uttermost parts of the earth to hear the wisdom of Solomon; and, behold, a greater than Solomon is here.
43 When the unclean spirit is gone out of a man, he walketh through dry places, seeking rest, and findeth none.
44 Then he saith, I will return into my house from whence I came out; and when he is come, he findeth it empty, swept, and garnished.
45 Then goeth he, and taketh with himself seven other spirits more wicked than himself, and they enter in and dwell there: and the last state of that man is worse than the first. Even so shall it be also unto this wicked generation.
46 ¶ While he yet talked to the people, behold, his mother and his brethren stood without, desiring to speak with him.
47 Then one said unto him, Behold, thy mother and thy brethren stand without, desiring to speak with thee.
48 But he answered and said unto him that told him, Who is my mother? and who are my brethren?
49 And he stretched forth his hand toward his disciples, and said, Behold my mother and my brethren!
50 For whosoever shall do the will of my Father which is in heaven, the same is my brother, and sister, and mother.`,
"matthew-13": `CHAPTER 13
Jesus explains why He teaches with parables—He gives the parables of the sower, the wheat and the tares, the grain of mustard seed, the leaven, the treasure hidden in the field, the pearl of great price, and the net cast into the sea—A prophet is not honored by his own people.
1 The same day went Jesus out of the house, and sat by the sea side.
2 And great multitudes were gathered together unto him, so that he went into a ship, and sat; and the whole multitude stood on the shore.
3 And he spake many things unto them in parables, saying, Behold, a sower went forth to sow;
4 And when he sowed, some seeds fell by the way side, and the fowls came and devoured them up:
5 Some fell upon stony places, where they had not much earth: and forthwith they sprung up, because they had no deepness of earth:
6 And when the sun was up, they were scorched; and because they had no root, they withered away.
7 And some fell among thorns; and the thorns sprung up, and choked them:
8 But other fell into good ground, and brought forth fruit, some an hundredfold, some sixtyfold, some thirtyfold.
9 Who hath ears to hear, let him hear.
10 And the disciples came, and said unto him, Why speakest thou unto them in parables?
11 He answered and said unto them, Because it is given unto you to know the mysteries of the kingdom of heaven, but to them it is not given.
12 For whosoever hath, to him shall be given, and he shall have more abundance: but whosoever hath not, from him shall be taken away even that he hath.
13 Therefore speak I to them in parables: because they seeing see not; and hearing they hear not, neither do they understand.
14 And in them is fulfilled the prophecy of Esaias, which saith, By hearing ye shall hear, and shall not understand; and seeing ye shall see, and shall not perceive:
15 For this people’s heart is waxed gross, and their ears are dull of hearing, and their eyes they have closed; lest at any time they should see with their eyes, and hear with their ears, and should understand with their heart, and should be converted, and I should heal them.
16 But blessed are your eyes, for they see: and your ears, for they hear.
17 For verily I say unto you, That many prophets and righteous men have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them.
18 ¶ Hear ye therefore the parable of the sower.
19 When any one heareth the word of the kingdom, and understandeth it not, then cometh the wicked one, and catcheth away that which was sown in his heart. This is he which received seed by the way side.
20 But he that received the seed into stony places, the same is he that heareth the word, and anon with joy receiveth it;
21 Yet hath he not root in himself, but dureth for a while: for when tribulation or persecution ariseth because of the word, by and by he is offended.
22 He also that received seed among the thorns is he that heareth the word; and the care of this world, and the deceitfulness of riches, choke the word, and he becometh unfruitful.
23 But he that received seed into the good ground is he that heareth the word, and understandeth it; which also beareth fruit, and bringeth forth, some an hundredfold, some sixty, some thirty.
24 ¶ Another parable put he forth unto them, saying, The kingdom of heaven is likened unto a man which sowed good seed in his field:
25 But while men slept, his enemy came and sowed tares among the wheat, and went his way.
26 But when the blade was sprung up, and brought forth fruit, then appeared the tares also.
27 So the servants of the householder came and said unto him, Sir, didst not thou sow good seed in thy field? from whence then hath it tares?
28 He said unto them, An enemy hath done this. The servants said unto him, Wilt thou then that we go and gather them up?
29 But he said, Nay; lest while ye gather up the tares, ye root up also the wheat with them.
30 Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn.
31 ¶ Another parable put he forth unto them, saying, The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field:
32 Which indeed is the least of all seeds: but when it is grown, it is the greatest among herbs, and becometh a tree, so that the birds of the air come and lodge in the branches thereof.
33 ¶ Another parable spake he unto them; The kingdom of heaven is like unto leaven, which a woman took, and hid in three measures of meal, till the whole was leavened.
34 All these things spake Jesus unto the multitude in parables; and without a parable spake he not unto them:
35 That it might be fulfilled which was spoken by the prophet, saying, I will open my mouth in parables; I will utter things which have been kept secret from the foundation of the world.
36 Then Jesus sent the multitude away, and went into the house: and his disciples came unto him, saying, Declare unto us the parable of the tares of the field.
37 He answered and said unto them, He that soweth the good seed is the Son of man;
38 The field is the world; the good seed are the children of the kingdom; but the tares are the children of the wicked one;
39 The enemy that sowed them is the devil; the harvest is the end of the world; and the reapers are the angels.
40 As therefore the tares are gathered and burned in the fire; so shall it be in the end of this world.
41 The Son of man shall send forth his angels, and they shall gather out of his kingdom all things that offend, and them which do iniquity;
42 And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth.
43 Then shall the righteous shine forth as the sun in the kingdom of their Father. Who hath ears to hear, let him hear.
44 ¶ Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.
45 ¶ Again, the kingdom of heaven is like unto a merchant man, seeking goodly pearls:
46 Who, when he had found one pearl of great price, went and sold all that he had, and bought it.
47 ¶ Again, the kingdom of heaven is like unto a net, that was cast into the sea, and gathered of every kind:
48 Which, when it was full, they drew to shore, and sat down, and gathered the good into vessels, but cast the bad away.
49 So shall it be at the end of the world: the angels shall come forth, and sever the wicked from among the just,
50 And shall cast them into the furnace of fire: there shall be wailing and gnashing of teeth.
51 Jesus saith unto them, Have ye understood all these things? They say unto him, Yea, Lord.
52 Then said he unto them, Therefore every scribe which is instructed unto the kingdom of heaven is like unto a man that is an householder, which bringeth forth out of his treasure things new and old.
53 ¶ And it came to pass, that when Jesus had finished these parables, he departed thence.
54 And when he was come into his own country, he taught them in their synagogue, insomuch that they were astonished, and said, Whence hath this man this wisdom, and these mighty works?
55 Is not this the carpenter’s son? is not his mother called Mary? and his brethren, James, and Joses, and Simon, and Judas?
56 And his sisters, are they not all with us? Whence then hath this man all these things?
57 And they were offended in him. But Jesus said unto them, A prophet is not without honour, save in his own country, and in his own house.
58 And he did not many mighty works there because of their unbelief.`,
"matthew-14": `CHAPTER 14
John the Baptist is beheaded—Jesus feeds the five thousand and walks on the sea—Those who touch the hem of His garment are made whole.
1 At that time Herod the tetrarch heard of the fame of Jesus,
2 And said unto his servants, This is John the Baptist; he is risen from the dead; and therefore mighty works do shew forth themselves in him.
3 ¶ For Herod had laid hold on John, and bound him, and put him in prison for Herodias’ sake, his brother Philip’s wife.
4 For John said unto him, It is not lawful for thee to have her.
5 And when he would have put him to death, he feared the multitude, because they counted him as a prophet.
6 But when Herod’s birthday was kept, the daughter of Herodias danced before them, and pleased Herod.
7 Whereupon he promised with an oath to give her whatsoever she would ask.
8 And she, being before instructed of her mother, said, Give me here John Baptist’s head in a charger.
9 And the king was sorry: nevertheless for the oath’s sake, and them which sat with him at meat, he commanded it to be given her.
10 And he sent, and beheaded John in the prison.
11 And his head was brought in a charger, and given to the damsel: and she brought it to her mother.
12 And his disciples came, and took up the body, and buried it, and went and told Jesus.
13 ¶ When Jesus heard of it, he departed thence by ship into a desert place apart: and when the people had heard thereof, they followed him on foot out of the cities.
14 And Jesus went forth, and saw a great multitude, and was moved with compassion toward them, and he healed their sick.
15 ¶ And when it was evening, his disciples came to him, saying, This is a desert place, and the time is now past; send the multitude away, that they may go into the villages, and buy themselves victuals.
16 But Jesus said unto them, They need not depart; give ye them to eat.
17 And they say unto him, We have here but five loaves, and two fishes.
18 He said, Bring them hither to me.
19 And he commanded the multitude to sit down on the grass, and took the five loaves, and the two fishes, and looking up to heaven, he blessed, and brake, and gave the loaves to his disciples, and the disciples to the multitude.
20 And they did all eat, and were filled: and they took up of the fragments that remained twelve baskets full.
21 And they that had eaten were about five thousand men, beside women and children.
22 ¶ And straightway Jesus constrained his disciples to get into a ship, and to go before him unto the other side, while he sent the multitudes away.
23 And when he had sent the multitudes away, he went up into a mountain apart to pray: and when the evening was come, he was there alone.
24 But the ship was now in the midst of the sea, tossed with waves: for the wind was contrary.
25 And in the fourth watch of the night Jesus went unto them, walking on the sea.
26 And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear.
27 But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid.
28 And Peter answered him and said, Lord, if it be thou, bid me come unto thee on the water.
29 And he said, Come. And when Peter was come down out of the ship, he walked on the water, to go to Jesus.
30 But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me.
31 And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?
32 And when they were come into the ship, the wind ceased.
33 Then they that were in the ship came and worshipped him, saying, Of a truth thou art the Son of God.
34 ¶ And when they were gone over, they came into the land of Gennesaret.
35 And when the men of that place had knowledge of him, they sent out into all that country round about, and brought unto him all that were diseased;
36 And besought him that they might only touch the hem of his garment: and as many as touched were made perfectly whole.`,
"matthew-15": `CHAPTER 15
The scribes and Pharisees contend against Jesus—He heals the daughter of a gentile woman—He feeds the four thousand.
1 Then came to Jesus scribes and Pharisees, which were of Jerusalem, saying,
2 Why do thy disciples transgress the tradition of the elders? for they wash not their hands when they eat bread.
3 But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?
4 For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death.
5 But ye say, Whosoever shall say to his father or his mother, It is a gift, by whatsoever thou mightest be profited by me;
6 And honour not his father or his mother, he shall be free. Thus have ye made the commandment of God of none effect by your tradition.
7 Ye hypocrites, well did Esaias prophesy of you, saying,
8 This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me.
9 But in vain they do worship me, teaching for doctrines the commandments of men.
10 ¶ And he called the multitude, and said unto them, Hear, and understand:
11 Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man.
12 Then came his disciples, and said unto him, Knowest thou that the Pharisees were offended, after they heard this saying?
13 But he answered and said, Every plant, which my heavenly Father hath not planted, shall be rooted up.
14 Let them alone: they be blind leaders of the blind. And if the blind lead the blind, both shall fall into the ditch.
15 Then answered Peter and said unto him, Declare unto us this parable.
16 And Jesus said, Are ye also yet without understanding?
17 Do not ye yet understand, that whatsoever entereth in at the mouth goeth into the belly, and is cast out into the draught?
18 But those things which proceed out of the mouth come forth from the heart; and they defile the man.
19 For out of the heart proceed evil thoughts, murders, adulteries, fornications, thefts, false witness, blasphemies:
20 These are the things which defile a man: but to eat with unwashen hands defileth not a man.
21 ¶ Then Jesus went thence, and departed into the coasts of Tyre and Sidon.
22 And, behold, a woman of Canaan came out of the same coasts, and cried unto him, saying, Have mercy on me, O Lord, thou Son of David; my daughter is grievously vexed with a devil.
23 But he answered her not a word. And his disciples came and besought him, saying, Send her away; for she crieth after us.
24 But he answered and said, I am not sent but unto the lost sheep of the house of Israel.
25 Then came she and worshipped him, saying, Lord, help me.
26 But he answered and said, It is not meet to take the children’s bread, and to cast it to dogs.
27 And she said, Truth, Lord: yet the dogs eat of the crumbs which fall from their masters’ table.
28 Then Jesus answered and said unto her, O woman, great is thy faith: be it unto thee even as thou wilt. And her daughter was made whole from that very hour.
29 And Jesus departed from thence, and came nigh unto the sea of Galilee; and went up into a mountain, and sat down there.
30 And great multitudes came unto him, having with them those that were lame, blind, dumb, maimed, and many others, and cast them down at Jesus’ feet; and he healed them:
31 Insomuch that the multitude wondered, when they saw the dumb to speak, the maimed to be whole, the lame to walk, and the blind to see: and they glorified the God of Israel.
32 ¶ Then Jesus called his disciples unto him, and said, I have compassion on the multitude, because they continue with me now three days, and have nothing to eat: and I will not send them away fasting, lest they faint in the way.
33 And his disciples say unto him, Whence should we have so much bread in the wilderness, as to fill so great a multitude?
34 And Jesus saith unto them, How many loaves have ye? And they said, Seven, and a few little fishes.
35 And he commanded the multitude to sit down on the ground.
36 And he took the seven loaves and the fishes, and gave thanks, and brake them, and gave to his disciples, and the disciples to the multitude.
37 And they did all eat, and were filled: and they took up of the broken meat that was left seven baskets full.
38 And they that did eat were four thousand men, beside women and children.
39 And he sent away the multitude, and took ship, and came into the coasts of Magdala.`,
"matthew-16": `CHAPTER 16
Jesus warns against the doctrine of the Pharisees and Sadducees—Peter testifies that Jesus is the Christ and is promised the keys of the kingdom—Jesus foretells His death and resurrection.
1 The Pharisees also with the Sadducees came, and tempting desired him that he would shew them a sign from heaven.
2 He answered and said unto them, When it is evening, ye say, It will be fair weather: for the sky is red.
3 And in the morning, It will be foul weather to day: for the sky is red and lowring. O ye hypocrites, ye can discern the face of the sky; but can ye not discern the signs of the times?
4 A wicked and adulterous generation seeketh after a sign; and there shall no sign be given unto it, but the sign of the prophet Jonas. And he left them, and departed.
5 And when his disciples were come to the other side, they had forgotten to take bread.
6 ¶ Then Jesus said unto them, Take heed and beware of the leaven of the Pharisees and of the Sadducees.
7 And they reasoned among themselves, saying, It is because we have taken no bread.
8 Which when Jesus perceived, he said unto them, O ye of little faith, why reason ye among yourselves, because ye have brought no bread?
9 Do ye not yet understand, neither remember the five loaves of the five thousand, and how many baskets ye took up?
10 Neither the seven loaves of the four thousand, and how many baskets ye took up?
11 How is it that ye do not understand that I spake it not to you concerning bread, that ye should beware of the leaven of the Pharisees and of the Sadducees?
12 Then understood they how that he bade them not beware of the leaven of bread, but of the doctrine of the Pharisees and of the Sadducees.
13 ¶ When Jesus came into the coasts of Cæsarea Philippi, he asked his disciples, saying, Whom do men say that I the Son of man am?
14 And they said, Some say that thou art John the Baptist: some, Elias; and others, Jeremias, or one of the prophets.
15 He saith unto them, But whom say ye that I am?
16 And Simon Peter answered and said, Thou art the Christ, the Son of the living God.
17 And Jesus answered and said unto him, Blessed art thou, Simon Bar-jona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.
18 And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.
19 And I will give unto thee the keys of the kingdom of heaven: and whatsoever thou shalt bind on earth shall be bound in heaven: and whatsoever thou shalt loose on earth shall be loosed in heaven.
20 Then charged he his disciples that they should tell no man that he was Jesus the Christ.
21 ¶ From that time forth began Jesus to shew unto his disciples, how that he must go unto Jerusalem, and suffer many things of the elders and chief priests and scribes, and be killed, and be raised again the third day.
22 Then Peter took him, and began to rebuke him, saying, Be it far from thee, Lord: this shall not be unto thee.
23 But he turned, and said unto Peter, Get thee behind me, Satan: thou art an offence unto me: for thou savourest not the things that be of God, but those that be of men.
24 ¶ Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.
25 For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.
26 For what is a man profited, if he shall gain the whole world, and lose his own soul? or what shall a man give in exchange for his soul?
27 For the Son of man shall come in the glory of his Father with his angels; and then he shall reward every man according to his works.
28 Verily I say unto you, There be some standing here, which shall not taste of death, till they see the Son of man coming in his kingdom.`,
"matthew-17": `CHAPTER 17
Jesus is transfigured before Peter, James, and John on the mount—Jesus heals a lunatic, tells of His coming death, and pays taxes in a miraculous manner.
1 And after six days Jesus taketh Peter, James, and John his brother, and bringeth them up into an high mountain apart,
2 And was transfigured before them: and his face did shine as the sun, and his raiment was white as the light.
3 And, behold, there appeared unto them Moses and Elias talking with him.
4 Then answered Peter, and said unto Jesus, Lord, it is good for us to be here: if thou wilt, let us make here three tabernacles; one for thee, and one for Moses, and one for Elias.
5 While he yet spake, behold, a bright cloud overshadowed them: and behold a voice out of the cloud, which said, This is my beloved Son, in whom I am well pleased; hear ye him.
6 And when the disciples heard it, they fell on their face, and were sore afraid.
7 And Jesus came and touched them, and said, Arise, and be not afraid.
8 And when they had lifted up their eyes, they saw no man, save Jesus only.
9 And as they came down from the mountain, Jesus charged them, saying, Tell the vision to no man, until the Son of man be risen again from the dead.
10 And his disciples asked him, saying, Why then say the scribes that Elias must first come?
11 And Jesus answered and said unto them, Elias truly shall first come, and restore all things.
12 But I say unto you, That Elias is come already, and they knew him not, but have done unto him whatsoever they listed. Likewise shall also the Son of man suffer of them.
13 Then the disciples understood that he spake unto them of John the Baptist.
14 ¶ And when they were come to the multitude, there came to him a certain man, kneeling down to him, and saying,
15 Lord, have mercy on my son: for he is lunatic, and sore vexed: for ofttimes he falleth into the fire, and oft into the water.
16 And I brought him to thy disciples, and they could not cure him.
17 Then Jesus answered and said, O faithless and perverse generation, how long shall I be with you? how long shall I suffer you? bring him hither to me.
18 And Jesus rebuked the devil; and he departed out of him: and the child was cured from that very hour.
19 Then came the disciples to Jesus apart, and said, Why could not we cast him out?
20 And Jesus said unto them, Because of your unbelief: for verily I say unto you, If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.
21 Howbeit this kind goeth not out but by prayer and fasting.
22 ¶ And while they abode in Galilee, Jesus said unto them, The Son of man shall be betrayed into the hands of men:
23 And they shall kill him, and the third day he shall be raised again. And they were exceeding sorry.
24 ¶ And when they were come to Capernaum, they that received tribute money came to Peter, and said, Doth not your master pay tribute?
25 He saith, Yes. And when he was come into the house, Jesus prevented him, saying, What thinkest thou, Simon? of whom do the kings of the earth take custom or tribute? of their own children, or of strangers?
26 Peter saith unto him, Of strangers. Jesus saith unto him, Then are the children free.
27 Notwithstanding, lest we should offend them, go thou to the sea, and cast an hook, and take up the fish that first cometh up; and when thou hast opened his mouth, thou shalt find a piece of money: that take, and give unto them for me and thee.`,
"matthew-18": `CHAPTER 18
Jesus explains how we are to treat our offending brethren—The Son of Man came to save that which was lost—All of the Twelve receive the keys of the kingdom—Jesus explains why we should forgive.
1 At the same time came the disciples unto Jesus, saying, Who is the greatest in the kingdom of heaven?
2 And Jesus called a little child unto him, and set him in the midst of them,
3 And said, Verily I say unto you, Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven.
4 Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.
5 And whoso shall receive one such little child in my name receiveth me.
6 But whoso shall offend one of these little ones which believe in me, it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea.
7 ¶ Woe unto the world because of offences! for it must needs be that offences come; but woe to that man by whom the offence cometh!
8 Wherefore if thy hand or thy foot offend thee, cut them off, and cast them from thee: it is better for thee to enter into life halt or maimed, rather than having two hands or two feet to be cast into everlasting fire.
9 And if thine eye offend thee, pluck it out, and cast it from thee: it is better for thee to enter into life with one eye, rather than having two eyes to be cast into hell fire.
10 Take heed that ye despise not one of these little ones; for I say unto you, That in heaven their angels do always behold the face of my Father which is in heaven.
11 For the Son of man is come to save that which was lost.
12 How think ye? if a man have an hundred sheep, and one of them be gone astray, doth he not leave the ninety and nine, and goeth into the mountains, and seeketh that which is gone astray?
13 And if so be that he find it, verily I say unto you, he rejoiceth more of that sheep, than of the ninety and nine which went not astray.
14 Even so it is not the will of your Father which is in heaven, that one of these little ones should perish.
15 ¶ Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother.
16 But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established.
17 And if he shall neglect to hear them, tell it unto the church: but if he neglect to hear the church, let him be unto thee as an heathen man and a publican.
18 Verily I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven.
19 Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.
20 For where two or three are gathered together in my name, there am I in the midst of them.
21 ¶ Then came Peter to him, and said, Lord, how oft shall my brother sin against me, and I forgive him? till seven times?
22 Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.
23 ¶ Therefore is the kingdom of heaven likened unto a certain king, which would take account of his servants.
24 And when he had begun to reckon, one was brought unto him, which owed him ten thousand talents.
25 But forasmuch as he had not to pay, his lord commanded him to be sold, and his wife, and children, and all that he had, and payment to be made.
26 The servant therefore fell down, and worshipped him, saying, Lord, have patience with me, and I will pay thee all.
27 Then the lord of that servant was moved with compassion, and loosed him, and forgave him the debt.
28 But the same servant went out, and found one of his fellowservants, which owed him an hundred pence: and he laid hands on him, and took him by the throat, saying, Pay me that thou owest.
29 And his fellowservant fell down at his feet, and besought him, saying, Have patience with me, and I will pay thee all.
30 And he would not: but went and cast him into prison, till he should pay the debt.
31 So when his fellowservants saw what was done, they were very sorry, and came and told unto their lord all that was done.
32 Then his lord, after that he had called him, said unto him, O thou wicked servant, I forgave thee all that debt, because thou desiredst me:
33 Shouldest not thou also have had compassion on thy fellowservant, even as I had pity on thee?
34 And his lord was wroth, and delivered him to the tormentors, till he should pay all that was due unto him.
35 So likewise shall my heavenly Father do also unto you, if ye from your hearts forgive not every one his brother their trespasses.`,
"matthew-19": `CHAPTER 19
Jesus teaches about marriage and divorce—Eternal life is for those who keep the commandments—The Twelve Apostles will judge the house of Israel.
1 And it came to pass, that when Jesus had finished these sayings, he departed from Galilee, and came into the coasts of Judæa beyond Jordan;
2 And great multitudes followed him; and he healed them there.
3 ¶ The Pharisees also came unto him, tempting him, and saying unto him, Is it lawful for a man to put away his wife for every cause?
4 And he answered and said unto them, Have ye not read, that he which made them at the beginning made them male and female,
5 And said, For this cause shall a man leave father and mother, and shall cleave to his wife: and they twain shall be one flesh?
6 Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.
7 They say unto him, Why did Moses then command to give a writing of divorcement, and to put her away?
8 He saith unto them, Moses because of the hardness of your hearts suffered you to put away your wives: but from the beginning it was not so.
9 And I say unto you, Whosoever shall put away his wife, except it be for fornication, and shall marry another, committeth adultery: and whoso marrieth her which is put away doth commit adultery.
10 ¶ His disciples say unto him, If the case of the man be so with his wife, it is not good to marry.
11 But he said unto them, All men cannot receive this saying, save they to whom it is given.
12 For there are some eunuchs, which were so born from their mother’s womb: and there are some eunuchs, which were made eunuchs of men: and there be eunuchs, which have made themselves eunuchs for the kingdom of heaven’s sake. He that is able to receive it, let him receive it.
13 ¶ Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them.
14 But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven.
15 And he laid his hands on them, and departed thence.
16 ¶ And, behold, one came and said unto him, Good Master, what good thing shall I do, that I may have eternal life?
17 And he said unto him, Why callest thou me good? there is none good but one, that is, God: but if thou wilt enter into life, keep the commandments.
18 He saith unto him, Which? Jesus said, Thou shalt do no murder, Thou shalt not commit adultery, Thou shalt not steal, Thou shalt not bear false witness,
19 Honour thy father and thy mother: and, Thou shalt love thy neighbour as thyself.
20 The young man saith unto him, All these things have I kept from my youth up: what lack I yet?
21 Jesus said unto him, If thou wilt be perfect, go and sell that thou hast, and give to the poor, and thou shalt have treasure in heaven: and come and follow me.
22 But when the young man heard that saying, he went away sorrowful: for he had great possessions.
23 ¶ Then said Jesus unto his disciples, Verily I say unto you, That a rich man shall hardly enter into the kingdom of heaven.
24 And again I say unto you, It is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.
25 When his disciples heard it, they were exceedingly amazed, saying, Who then can be saved?
26 But Jesus beheld them, and said unto them, With men this is impossible; but with God all things are possible.
27 ¶ Then answered Peter and said unto him, Behold, we have forsaken all, and followed thee; what shall we have therefore?
28 And Jesus said unto them, Verily I say unto you, That ye which have followed me, in the regeneration when the Son of man shall sit in the throne of his glory, ye also shall sit upon twelve thrones, judging the twelve tribes of Israel.
29 And every one that hath forsaken houses, or brethren, or sisters, or father, or mother, or wife, or children, or lands, for my name’s sake, shall receive an hundredfold, and shall inherit everlasting life.
30 But many that are first shall be last; and the last shall be first.`,
"matthew-20": `CHAPTER 20
Jesus gives the parable of the laborers in the vineyard—He foretells His crucifixion and resurrection—He came to give His life as a ransom for many.
1 For the kingdom of heaven is like unto a man that is an householder, which went out early in the morning to hire labourers into his vineyard.
2 And when he had agreed with the labourers for a penny a day, he sent them into his vineyard.
3 And he went out about the third hour, and saw others standing idle in the marketplace,
4 And said unto them; Go ye also into the vineyard, and whatsoever is right I will give you. And they went their way.
5 Again he went out about the sixth and ninth hour, and did likewise.
6 And about the eleventh hour he went out, and found others standing idle, and saith unto them, Why stand ye here all the day idle?
7 They say unto him, Because no man hath hired us. He saith unto them, Go ye also into the vineyard; and whatsoever is right, that shall ye receive.
8 So when even was come, the lord of the vineyard saith unto his steward, Call the labourers, and give them their hire, beginning from the last unto the first.
9 And when they came that were hired about the eleventh hour, they received every man a penny.
10 But when the first came, they supposed that they should have received more; and they likewise received every man a penny.
11 And when they had received it, they murmured against the goodman of the house,
12 Saying, These last have wrought but one hour, and thou hast made them equal unto us, which have borne the burden and heat of the day.
13 But he answered one of them, and said, Friend, I do thee no wrong: didst not thou agree with me for a penny?
14 Take that thine is, and go thy way: I will give unto this last, even as unto thee.
15 Is it not lawful for me to do what I will with mine own? Is thine eye evil, because I am good?
16 So the last shall be first, and the first last: for many be called, but few chosen.
17 ¶ And Jesus going up to Jerusalem took the twelve disciples apart in the way, and said unto them,
18 Behold, we go up to Jerusalem; and the Son of man shall be betrayed unto the chief priests and unto the scribes, and they shall condemn him to death,
19 And shall deliver him to the Gentiles to mock, and to scourge, and to crucify him: and the third day he shall rise again.
20 ¶ Then came to him the mother of Zebedee’s children with her sons, worshipping him, and desiring a certain thing of him.
21 And he said unto her, What wilt thou? She saith unto him, Grant that these my two sons may sit, the one on thy right hand, and the other on the left, in thy kingdom.
22 But Jesus answered and said, Ye know not what ye ask. Are ye able to drink of the cup that I shall drink of, and to be baptized with the baptism that I am baptized with? They say unto him, We are able.
23 And he saith unto them, Ye shall drink indeed of my cup, and be baptized with the baptism that I am baptized with: but to sit on my right hand, and on my left, is not mine to give, but it shall be given to them for whom it is prepared of my Father.
24 And when the ten heard it, they were moved with indignation against the two brethren.
25 But Jesus called them unto him, and said, Ye know that the princes of the Gentiles exercise dominion over them, and they that are great exercise authority upon them.
26 But it shall not be so among you: but whosoever will be great among you, let him be your minister;
27 And whosoever will be chief among you, let him be your servant:
28 Even as the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.
29 And as they departed from Jericho, a great multitude followed him.
30 ¶ And, behold, two blind men sitting by the way side, when they heard that Jesus passed by, cried out, saying, Have mercy on us, O Lord, thou Son of David.
31 And the multitude rebuked them, because they should hold their peace: but they cried the more, saying, Have mercy on us, O Lord, thou Son of David.
32 And Jesus stood still, and called them, and said, What will ye that I shall do unto you?
33 They say unto him, Lord, that our eyes may be opened.
34 So Jesus had compassion on them, and touched their eyes: and immediately their eyes received sight, and they followed him.`,
"matthew-21": `CHAPTER 21
Jesus rides in triumph into Jerusalem—He cleanses the temple, curses the fig tree, and discusses authority—He gives the parables of the two sons and the wicked husbandmen.
1 And when they drew nigh unto Jerusalem, and were come to Bethphage, unto the mount of Olives, then sent Jesus two disciples,
2 Saying unto them, Go into the village over against you, and straightway ye shall find an ass tied, and a colt with her: loose them, and bring them unto me.
3 And if any man say ought unto you, ye shall say, The Lord hath need of them; and straightway he will send them.
4 All this was done, that it might be fulfilled which was spoken by the prophet, saying,
5 Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass, and a colt the foal of an ass.
6 And the disciples went, and did as Jesus commanded them,
7 And brought the ass, and the colt, and put on them their clothes, and they set him thereon.
8 And a very great multitude spread their garments in the way; others cut down branches from the trees, and strawed them in the way.
9 And the multitudes that went before, and that followed, cried, saying, Hosanna to the Son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.
10 And when he was come into Jerusalem, all the city was moved, saying, Who is this?
11 And the multitude said, This is Jesus the prophet of Nazareth of Galilee.
12 ¶ And Jesus went into the temple of God, and cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves,
13 And said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves.
14 And the blind and the lame came to him in the temple; and he healed them.
15 And when the chief priests and scribes saw the wonderful things that he did, and the children crying in the temple, and saying, Hosanna to the Son of David; they were sore displeased,
16 And said unto him, Hearest thou what these say? And Jesus saith unto them, Yea; have ye never read, Out of the mouth of babes and sucklings thou hast perfected praise?
17 ¶ And he left them, and went out of the city into Bethany; and he lodged there.
18 Now in the morning as he returned into the city, he hungered.
19 And when he saw a fig tree in the way, he came to it, and found nothing thereon, but leaves only, and said unto it, Let no fruit grow on thee henceforward for ever. And presently the fig tree withered away.
20 And when the disciples saw it, they marvelled, saying, How soon is the fig tree withered away!
21 Jesus answered and said unto them, Verily I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done.
22 And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.
23 ¶ And when he was come into the temple, the chief priests and the elders of the people came unto him as he was teaching, and said, By what authority doest thou these things? and who gave thee this authority?
24 And Jesus answered and said unto them, I also will ask you one thing, which if ye tell me, I in like wise will tell you by what authority I do these things.
25 The baptism of John, whence was it? from heaven, or of men? And they reasoned with themselves, saying, If we shall say, From heaven; he will say unto us, Why did ye not then believe him?
26 But if we shall say, Of men; we fear the people; for all hold John as a prophet.
27 And they answered Jesus, and said, We cannot tell. And he said unto them, Neither tell I you by what authority I do these things.
28 ¶ But what think ye? A certain man had two sons; and he came to the first, and said, Son, go work to day in my vineyard.
29 He answered and said, I will not: but afterward he repented, and went.
30 And he came to the second, and said likewise. And he answered and said, I go, sir: and went not.
31 Whether of them twain did the will of his father? They say unto him, The first. Jesus saith unto them, Verily I say unto you, That the publicans and the harlots go into the kingdom of God before you.
32 For John came unto you in the way of righteousness, and ye believed him not: but the publicans and the harlots believed him: and ye, when ye had seen it, repented not afterward, that ye might believe him.
33 ¶ Hear another parable: There was a certain householder, which planted a vineyard, and hedged it round about, and digged a winepress in it, and built a tower, and let it out to husbandmen, and went into a far country:
34 And when the time of the fruit drew near, he sent his servants to the husbandmen, that they might receive the fruits of it.
35 And the husbandmen took his servants, and beat one, and killed another, and stoned another.
36 Again, he sent other servants more than the first: and they did unto them likewise.
37 But last of all he sent unto them his son, saying, They will reverence my son.
38 But when the husbandmen saw the son, they said among themselves, This is the heir; come, let us kill him, and let us seize on his inheritance.
39 And they caught him, and cast him out of the vineyard, and slew him.
40 When the lord therefore of the vineyard cometh, what will he do unto those husbandmen?
41 They say unto him, He will miserably destroy those wicked men, and will let out his vineyard unto other husbandmen, which shall render him the fruits in their seasons.
42 Jesus saith unto them, Did ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner: this is the Lord’s doing, and it is marvellous in our eyes?
43 Therefore say I unto you, The kingdom of God shall be taken from you, and given to a nation bringing forth the fruits thereof.
44 And whosoever shall fall on this stone shall be broken: but on whomsoever it shall fall, it will grind him to powder.
45 And when the chief priests and Pharisees had heard his parables, they perceived that he spake of them.
46 But when they sought to lay hands on him, they feared the multitude, because they took him for a prophet.`,
"matthew-22": `CHAPTER 22
Jesus gives the parable of the marriage of the king’s son—Pay tribute to Cæsar and to God—Worldly marriages endure in this life only—The first commandment is to love the Lord—Jesus asks, What think ye of Christ?
1 And Jesus answered and spake unto them again by parables, and said,
2 The kingdom of heaven is like unto a certain king, which made a marriage for his son,
3 And sent forth his servants to call them that were bidden to the wedding: and they would not come.
4 Again, he sent forth other servants, saying, Tell them which are bidden, Behold, I have prepared my dinner: my oxen and my fatlings are killed, and all things are ready: come unto the marriage.
5 But they made light of it, and went their ways, one to his farm, another to his merchandise:
6 And the remnant took his servants, and entreated them spitefully, and slew them.
7 But when the king heard thereof, he was wroth: and he sent forth his armies, and destroyed those murderers, and burned up their city.
8 Then saith he to his servants, The wedding is ready, but they which were bidden were not worthy.
9 Go ye therefore into the highways, and as many as ye shall find, bid to the marriage.
10 So those servants went out into the highways, and gathered together all as many as they found, both bad and good: and the wedding was furnished with guests.
11 ¶ And when the king came in to see the guests, he saw there a man which had not on a wedding garment:
12 And he saith unto him, Friend, how camest thou in hither not having a wedding garment? And he was speechless.
13 Then said the king to the servants, Bind him hand and foot, and take him away, and cast him into outer darkness; there shall be weeping and gnashing of teeth.
14 For many are called, but few are chosen.
15 ¶ Then went the Pharisees, and took counsel how they might entangle him in his talk.
16 And they sent out unto him their disciples with the Herodians, saying, Master, we know that thou art true, and teachest the way of God in truth, neither carest thou for any man: for thou regardest not the person of men.
17 Tell us therefore, What thinkest thou? Is it lawful to give tribute unto Cæsar, or not?
18 But Jesus perceived their wickedness, and said, Why tempt ye me, ye hypocrites?
19 Shew me the tribute money. And they brought unto him a penny.
20 And he saith unto them, Whose is this image and superscription?
21 They say unto him, Cæsar’s. Then saith he unto them, Render therefore unto Cæsar the things which are Cæsar’s; and unto God the things that are God’s.
22 When they had heard these words, they marvelled, and left him, and went their way.
23 ¶ The same day came to him the Sadducees, which say that there is no resurrection, and asked him,
24 Saying, Master, Moses said, If a man die, having no children, his brother shall marry his wife, and raise up seed unto his brother.
25 Now there were with us seven brethren: and the first, when he had married a wife, deceased, and, having no issue, left his wife unto his brother:
26 Likewise the second also, and the third, unto the seventh.
27 And last of all the woman died also.
28 Therefore in the resurrection whose wife shall she be of the seven? for they all had her.
29 Jesus answered and said unto them, Ye do err, not knowing the scriptures, nor the power of God.
30 For in the resurrection they neither marry, nor are given in marriage, but are as the angels of God in heaven.
31 But as touching the resurrection of the dead, have ye not read that which was spoken unto you by God, saying,
32 I am the God of Abraham, and the God of Isaac, and the God of Jacob? God is not the God of the dead, but of the living.
33 And when the multitude heard this, they were astonished at his doctrine.
34 ¶ But when the Pharisees had heard that he had put the Sadducees to silence, they were gathered together.
35 Then one of them, which was a lawyer, asked him a question, tempting him, and saying,
36 Master, which is the great commandment in the law?
37 Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.
38 This is the first and great commandment.
39 And the second is like unto it, Thou shalt love thy neighbour as thyself.
40 On these two commandments hang all the law and the prophets.
41 ¶ While the Pharisees were gathered together, Jesus asked them,
42 Saying, What think ye of Christ? whose son is he? They say unto him, The Son of David.
43 He saith unto them, How then doth David in spirit call him Lord, saying,
44 The Lord said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool?
45 If David then call him Lord, how is he his son?
46 And no man was able to answer him a word, neither durst any man from that day forth ask him any more questions.`,
"matthew-23": `CHAPTER 23
Jesus pronounces woes upon the scribes and Pharisees—They will be held responsible for killing the prophets—They will not escape the damnation of hell.
1 Then spake Jesus to the multitude, and to his disciples,
2 Saying, The scribes and the Pharisees sit in Moses’ seat:
3 All therefore whatsoever they bid you observe, that observe and do; but do not ye after their works: for they say, and do not.
4 For they bind heavy burdens and grievous to be borne, and lay them on men’s shoulders; but they themselves will not move them with one of their fingers.
5 But all their works they do for to be seen of men: they make broad their phylacteries, and enlarge the borders of their garments,
6 And love the uppermost rooms at feasts, and the chief seats in the synagogues,
7 And greetings in the markets, and to be called of men, Rabbi, Rabbi.
8 But be not ye called Rabbi: for one is your Master, even Christ; and all ye are brethren.
9 And call no man your father upon the earth: for one is your Father, which is in heaven.
10 Neither be ye called masters: for one is your Master, even Christ.
11 But he that is greatest among you shall be your servant.
12 And whosoever shall exalt himself shall be abased; and he that shall humble himself shall be exalted.
13 ¶ But woe unto you, scribes and Pharisees, hypocrites! for ye shut up the kingdom of heaven against men: for ye neither go in yourselves, neither suffer ye them that are entering to go in.
14 Woe unto you, scribes and Pharisees, hypocrites! for ye devour widows’ houses, and for a pretence make long prayer: therefore ye shall receive the greater damnation.
15 Woe unto you, scribes and Pharisees, hypocrites! for ye compass sea and land to make one proselyte, and when he is made, ye make him twofold more the child of hell than yourselves.
16 Woe unto you, ye blind guides, which say, Whosoever shall swear by the temple, it is nothing; but whosoever shall swear by the gold of the temple, he is a debtor!
17 Ye fools and blind: for whether is greater, the gold, or the temple that sanctifieth the gold?
18 And, Whosoever shall swear by the altar, it is nothing; but whosoever sweareth by the gift that is upon it, he is guilty.
19 Ye fools and blind: for whether is greater, the gift, or the altar that sanctifieth the gift?
20 Whoso therefore shall swear by the altar, sweareth by it, and by all things thereon.
21 And whoso shall swear by the temple, sweareth by it, and by him that dwelleth therein.
22 And he that shall swear by heaven, sweareth by the throne of God, and by him that sitteth thereon.
23 Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith: these ought ye to have done, and not to leave the other undone.
24 Ye blind guides, which strain at a gnat, and swallow a camel.
25 Woe unto you, scribes and Pharisees, hypocrites! for ye make clean the outside of the cup and of the platter, but within they are full of extortion and excess.
26 Thou blind Pharisee, cleanse first that which is within the cup and platter, that the outside of them may be clean also.
27 Woe unto you, scribes and Pharisees, hypocrites! for ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men’s bones, and of all uncleanness.
28 Even so ye also outwardly appear righteous unto men, but within ye are full of hypocrisy and iniquity.
29 Woe unto you, scribes and Pharisees, hypocrites! because ye build the tombs of the prophets, and garnish the sepulchres of the righteous,
30 And say, If we had been in the days of our fathers, we would not have been partakers with them in the blood of the prophets.
31 Wherefore ye be witnesses unto yourselves, that ye are the children of them which killed the prophets.
32 Fill ye up then the measure of your fathers.
33 Ye serpents, ye generation of vipers, how can ye escape the damnation of hell?
34 ¶ Wherefore, behold, I send unto you prophets, and wise men, and scribes: and some of them ye shall kill and crucify; and some of them shall ye scourge in your synagogues, and persecute them from city to city:
35 That upon you may come all the righteous blood shed upon the earth, from the blood of righteous Abel unto the blood of Zacharias son of Barachias, whom ye slew between the temple and the altar.
36 Verily I say unto you, All these things shall come upon this generation.
37 O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!
38 Behold, your house is left unto you desolate.
39 For I say unto you, Ye shall not see me henceforth, till ye shall say, Blessed is he that cometh in the name of the Lord.`,
"matthew-24": `CHAPTER 24
Jesus foretells the doom of Jerusalem and the destruction of the temple—Great calamities will precede His Second Coming—He gives the parable of the fig tree.
1 And Jesus went out, and departed from the temple: and his disciples came to him for to shew him the buildings of the temple.
2 And Jesus said unto them, See ye not all these things? verily I say unto you, There shall not be left here one stone upon another, that shall not be thrown down.
3 ¶ And as he sat upon the mount of Olives, the disciples came unto him privately, saying, Tell us, when shall these things be? and what shall be the sign of thy coming, and of the end of the world?
4 And Jesus answered and said unto them, Take heed that no man deceive you.
5 For many shall come in my name, saying, I am Christ; and shall deceive many.
6 And ye shall hear of wars and rumours of wars: see that ye be not troubled: for all these things must come to pass, but the end is not yet.
7 For nation shall rise against nation, and kingdom against kingdom: and there shall be famines, and pestilences, and earthquakes, in divers places.
8 All these are the beginning of sorrows.
9 Then shall they deliver you up to be afflicted, and shall kill you: and ye shall be hated of all nations for my name’s sake.
10 And then shall many be offended, and shall betray one another, and shall hate one another.
11 And many false prophets shall rise, and shall deceive many.
12 And because iniquity shall abound, the love of many shall wax cold.
13 But he that shall endure unto the end, the same shall be saved.
14 And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.
15 When ye therefore shall see the abomination of desolation, spoken of by Daniel the prophet, stand in the holy place, (whoso readeth, let him understand:)
16 Then let them which be in Judæa flee into the mountains:
17 Let him which is on the housetop not come down to take any thing out of his house:
18 Neither let him which is in the field return back to take his clothes.
19 And woe unto them that are with child, and to them that give suck in those days!
20 But pray ye that your flight be not in the winter, neither on the sabbath day:
21 For then shall be great tribulation, such as was not since the beginning of the world to this time, no, nor ever shall be.
22 And except those days should be shortened, there should no flesh be saved: but for the elect’s sake those days shall be shortened.
23 Then if any man shall say unto you, Lo, here is Christ, or there; believe it not.
24 For there shall arise false Christs, and false prophets, and shall shew great signs and wonders; insomuch that, if it were possible, they shall deceive the very elect.
25 Behold, I have told you before.
26 Wherefore if they shall say unto you, Behold, he is in the desert; go not forth: behold, he is in the secret chambers; believe it not.
27 For as the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be.
28 For wheresoever the carcase is, there will the eagles be gathered together.
29 ¶ Immediately after the tribulation of those days shall the sun be darkened, and the moon shall not give her light, and the stars shall fall from heaven, and the powers of the heavens shall be shaken:
30 And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory.
31 And he shall send his angels with a great sound of a trumpet, and they shall gather together his elect from the four winds, from one end of heaven to the other.
32 Now learn a parable of the fig tree; When his branch is yet tender, and putteth forth leaves, ye know that summer is nigh:
33 So likewise ye, when ye shall see all these things, know that it is near, even at the doors.
34 Verily I say unto you, This generation shall not pass, till all these things be fulfilled.
35 Heaven and earth shall pass away, but my words shall not pass away.
36 ¶ But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.
37 But as the days of Noe were, so shall also the coming of the Son of man be.
38 For as in the days that were before the flood they were eating and drinking, marrying and giving in marriage, until the day that Noe entered into the ark,
39 And knew not until the flood came, and took them all away; so shall also the coming of the Son of man be.
40 Then shall two be in the field; the one shall be taken, and the other left.
41 Two women shall be grinding at the mill; the one shall be taken, and the other left.
42 ¶ Watch therefore: for ye know not what hour your Lord doth come.
43 But know this, that if the goodman of the house had known in what watch the thief would come, he would have watched, and would not have suffered his house to be broken up.
44 Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.
45 Who then is a faithful and wise servant, whom his lord hath made ruler over his household, to give them meat in due season?
46 Blessed is that servant, whom his lord when he cometh shall find so doing.
47 Verily I say unto you, That he shall make him ruler over all his goods.
48 But and if that evil servant shall say in his heart, My lord delayeth his coming;
49 And shall begin to smite his fellowservants, and to eat and drink with the drunken;
50 The lord of that servant shall come in a day when he looketh not for him, and in an hour that he is not aware of,
51 And shall cut him asunder, and appoint him his portion with the hypocrites: there shall be weeping and gnashing of teeth.`,
"matthew-25": `CHAPTER 25
Jesus gives the parables of the ten virgins, the talents, and the sheep and the goats.
1 Then shall the kingdom of heaven be likened unto ten virgins, which took their lamps, and went forth to meet the bridegroom.
2 And five of them were wise, and five were foolish.
3 They that were foolish took their lamps, and took no oil with them:
4 But the wise took oil in their vessels with their lamps.
5 While the bridegroom tarried, they all slumbered and slept.
6 And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him.
7 Then all those virgins arose, and trimmed their lamps.
8 And the foolish said unto the wise, Give us of your oil; for our lamps are gone out.
9 But the wise answered, saying, Not so; lest there be not enough for us and you: but go ye rather to them that sell, and buy for yourselves.
10 And while they went to buy, the bridegroom came; and they that were ready went in with him to the marriage: and the door was shut.
11 Afterward came also the other virgins, saying, Lord, Lord, open to us.
12 But he answered and said, Verily I say unto you, I know you not.
13 Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.
14 ¶ For the kingdom of heaven is as a man travelling into a far country, who called his own servants, and delivered unto them his goods.
15 And unto one he gave five talents, to another two, and to another one; to every man according to his several ability; and straightway took his journey.
16 Then he that had received the five talents went and traded with the same, and made them other five talents.
17 And likewise he that had received two, he also gained other two.
18 But he that had received one went and digged in the earth, and hid his lord’s money.
19 After a long time the lord of those servants cometh, and reckoneth with them.
20 And so he that had received five talents came and brought other five talents, saying, Lord, thou deliveredst unto me five talents: behold, I have gained beside them five talents more.
21 His lord said unto him, Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
22 He also that had received two talents came and said, Lord, thou deliveredst unto me two talents: behold, I have gained two other talents beside them.
23 His lord said unto him, Well done, good and faithful servant; thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.
24 Then he which had received the one talent came and said, Lord, I knew thee that thou art an hard man, reaping where thou hast not sown, and gathering where thou hast not strawed:
25 And I was afraid, and went and hid thy talent in the earth: lo, there thou hast that is thine.
26 His lord answered and said unto him, Thou wicked and slothful servant, thou knewest that I reap where I sowed not, and gather where I have not strawed:
27 Thou oughtest therefore to have put my money to the exchangers, and then at my coming I should have received mine own with usury.
28 Take therefore the talent from him, and give it unto him which hath ten talents.
29 For unto every one that hath shall be given, and he shall have abundance: but from him that hath not shall be taken away even that which he hath.
30 And cast ye the unprofitable servant into outer darkness: there shall be weeping and gnashing of teeth.
31 ¶ When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory:
32 And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats:
33 And he shall set the sheep on his right hand, but the goats on the left.
34 Then shall the King say unto them on his right hand, Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world:
35 For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in:
36 Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.
37 Then shall the righteous answer him, saying, Lord, when saw we thee an hungred, and fed thee? or thirsty, and gave thee drink?
38 When saw we thee a stranger, and took thee in? or naked, and clothed thee?
39 Or when saw we thee sick, or in prison, and came unto thee?
40 And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.
41 Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels:
42 For I was an hungred, and ye gave me no meat: I was thirsty, and ye gave me no drink:
43 I was a stranger, and ye took me not in: naked, and ye clothed me not: sick, and in prison, and ye visited me not.
44 Then shall they also answer him, saying, Lord, when saw we thee an hungred, or athirst, or a stranger, or naked, or sick, or in prison, and did not minister unto thee?
45 Then shall he answer them, saying, Verily I say unto you, Inasmuch as ye did it not to one of the least of these, ye did it not to me.
46 And these shall go away into everlasting punishment: but the righteous into life eternal.`,
"matthew-26": `CHAPTER 26
Jesus is anointed—He keeps the Passover and institutes the sacrament—He suffers in Gethsemane, is betrayed by Judas, and is taken before Caiaphas—Peter denies that he knows Jesus.
1 And it came to pass, when Jesus had finished all these sayings, he said unto his disciples,
2 Ye know that after two days is the feast of the passover, and the Son of man is betrayed to be crucified.
3 Then assembled together the chief priests, and the scribes, and the elders of the people, unto the palace of the high priest, who was called Caiaphas,
4 And consulted that they might take Jesus by subtilty, and kill him.
5 But they said, Not on the feast day, lest there be an uproar among the people.
6 ¶ Now when Jesus was in Bethany, in the house of Simon the leper,
7 There came unto him a woman having an alabaster box of very precious ointment, and poured it on his head, as he sat at meat.
8 But when his disciples saw it, they had indignation, saying, To what purpose is this waste?
9 For this ointment might have been sold for much, and given to the poor.
10 When Jesus understood it, he said unto them, Why trouble ye the woman? for she hath wrought a good work upon me.
11 For ye have the poor always with you; but me ye have not always.
12 For in that she hath poured this ointment on my body, she did it for my burial.
13 Verily I say unto you, Wheresoever this gospel shall be preached in the whole world, there shall also this, that this woman hath done, be told for a memorial of her.
14 ¶ Then one of the twelve, called Judas Iscariot, went unto the chief priests,
15 And said unto them, What will ye give me, and I will deliver him unto you? And they covenanted with him for thirty pieces of silver.
16 And from that time he sought opportunity to betray him.
17 ¶ Now the first day of the feast of unleavened bread the disciples came to Jesus, saying unto him, Where wilt thou that we prepare for thee to eat the passover?
18 And he said, Go into the city to such a man, and say unto him, The Master saith, My time is at hand; I will keep the passover at thy house with my disciples.
19 And the disciples did as Jesus had appointed them; and they made ready the passover.
20 Now when the even was come, he sat down with the twelve.
21 And as they did eat, he said, Verily I say unto you, that one of you shall betray me.
22 And they were exceeding sorrowful, and began every one of them to say unto him, Lord, is it I?
23 And he answered and said, He that dippeth his hand with me in the dish, the same shall betray me.
24 The Son of man goeth as it is written of him: but woe unto that man by whom the Son of man is betrayed! it had been good for that man if he had not been born.
25 Then Judas, which betrayed him, answered and said, Master, is it I? He said unto him, Thou hast said.
26 ¶ And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said, Take, eat; this is my body.
27 And he took the cup, and gave thanks, and gave it to them, saying, Drink ye all of it;
28 For this is my blood of the new testament, which is shed for many for the remission of sins.
29 But I say unto you, I will not drink henceforth of this fruit of the vine, until that day when I drink it new with you in my Father’s kingdom.
30 And when they had sung an hymn, they went out into the mount of Olives.
31 Then saith Jesus unto them, All ye shall be offended because of me this night: for it is written, I will smite the shepherd, and the sheep of the flock shall be scattered abroad.
32 But after I am risen again, I will go before you into Galilee.
33 Peter answered and said unto him, Though all men shall be offended because of thee, yet will I never be offended.
34 Jesus said unto him, Verily I say unto thee, That this night, before the cock crow, thou shalt deny me thrice.
35 Peter said unto him, Though I should die with thee, yet will I not deny thee. Likewise also said all the disciples.
36 ¶ Then cometh Jesus with them unto a place called Gethsemane, and saith unto the disciples, Sit ye here, while I go and pray yonder.
37 And he took with him Peter and the two sons of Zebedee, and began to be sorrowful and very heavy.
38 Then saith he unto them, My soul is exceeding sorrowful, even unto death: tarry ye here, and watch with me.
39 And he went a little further, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.
40 And he cometh unto the disciples, and findeth them asleep, and saith unto Peter, What, could ye not watch with me one hour?
41 Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.
42 He went away again the second time, and prayed, saying, O my Father, if this cup may not pass away from me, except I drink it, thy will be done.
43 And he came and found them asleep again: for their eyes were heavy.
44 And he left them, and went away again, and prayed the third time, saying the same words.
45 Then cometh he to his disciples, and saith unto them, Sleep on now, and take your rest: behold, the hour is at hand, and the Son of man is betrayed into the hands of sinners.
46 Rise, let us be going: behold, he is at hand that doth betray me.
47 ¶ And while he yet spake, lo, Judas, one of the twelve, came, and with him a great multitude with swords and staves, from the chief priests and elders of the people.
48 Now he that betrayed him gave them a sign, saying, Whomsoever I shall kiss, that same is he: hold him fast.
49 And forthwith he came to Jesus, and said, Hail, master; and kissed him.
50 And Jesus said unto him, Friend, wherefore art thou come? Then came they, and laid hands on Jesus, and took him.
51 And, behold, one of them which were with Jesus stretched out his hand, and drew his sword, and struck a servant of the high priest’s, and smote off his ear.
52 Then said Jesus unto him, Put up again thy sword into his place: for all they that take the sword shall perish with the sword.
53 Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?
54 But how then shall the scriptures be fulfilled, that thus it must be?
55 In that same hour said Jesus to the multitudes, Are ye come out as against a thief with swords and staves for to take me? I sat daily with you teaching in the temple, and ye laid no hold on me.
56 But all this was done, that the scriptures of the prophets might be fulfilled. Then all the disciples forsook him, and fled.
57 ¶ And they that had laid hold on Jesus led him away to Caiaphas the high priest, where the scribes and the elders were assembled.
58 But Peter followed him afar off unto the high priest’s palace, and went in, and sat with the servants, to see the end.
59 Now the chief priests, and elders, and all the council, sought false witness against Jesus, to put him to death;
60 But found none: yea, though many false witnesses came, yet found they none. At the last came two false witnesses,
61 And said, This fellow said, I am able to destroy the temple of God, and to build it in three days.
62 And the high priest arose, and said unto him, Answerest thou nothing? what is it which these witness against thee?
63 But Jesus held his peace. And the high priest answered and said unto him, I adjure thee by the living God, that thou tell us whether thou be the Christ, the Son of God.
64 Jesus saith unto him, Thou hast said: nevertheless I say unto you, Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven.
65 Then the high priest rent his clothes, saying, He hath spoken blasphemy; what further need have we of witnesses? behold, now ye have heard his blasphemy.
66 What think ye? They answered and said, He is guilty of death.
67 Then did they spit in his face, and buffeted him; and others smote him with the palms of their hands,
68 Saying, Prophesy unto us, thou Christ, Who is he that smote thee?
69 ¶ Now Peter sat without in the palace: and a damsel came unto him, saying, Thou also wast with Jesus of Galilee.
70 But he denied before them all, saying, I know not what thou sayest.
71 And when he was gone out into the porch, another maid saw him, and said unto them that were there, This fellow was also with Jesus of Nazareth.
72 And again he denied with an oath, I do not know the man.
73 And after a while came unto him they that stood by, and said to Peter, Surely thou also art one of them; for thy speech bewrayeth thee.
74 Then began he to curse and to swear, saying, I know not the man. And immediately the cock crew.
75 And Peter remembered the word of Jesus, which said unto him, Before the cock crow, thou shalt deny me thrice. And he went out, and wept bitterly.`,
"matthew-27": `CHAPTER 27
Jesus is accused and condemned before Pilate—Barabbas is released—Jesus is mocked, crucified, and buried in the tomb of Joseph of Arimathæa.
1 When the morning was come, all the chief priests and elders of the people took counsel against Jesus to put him to death:
2 And when they had bound him, they led him away, and delivered him to Pontius Pilate the governor.
3 ¶ Then Judas, which had betrayed him, when he saw that he was condemned, repented himself, and brought again the thirty pieces of silver to the chief priests and elders,
4 Saying, I have sinned in that I have betrayed the innocent blood. And they said, What is that to us? see thou to that.
5 And he cast down the pieces of silver in the temple, and departed, and went and hanged himself.
6 And the chief priests took the silver pieces, and said, It is not lawful for to put them into the treasury, because it is the price of blood.
7 And they took counsel, and bought with them the potter’s field, to bury strangers in.
8 Wherefore that field was called, The field of blood, unto this day.
9 Then was fulfilled that which was spoken by Jeremy the prophet, saying, And they took the thirty pieces of silver, the price of him that was valued, whom they of the children of Israel did value;
10 And gave them for the potter’s field, as the Lord appointed me.
11 And Jesus stood before the governor: and the governor asked him, saying, Art thou the King of the Jews? And Jesus said unto him, Thou sayest.
12 And when he was accused of the chief priests and elders, he answered nothing.
13 Then said Pilate unto him, Hearest thou not how many things they witness against thee?
14 And he answered him to never a word; insomuch that the governor marvelled greatly.
15 Now at that feast the governor was wont to release unto the people a prisoner, whom they would.
16 And they had then a notable prisoner, called Barabbas.
17 Therefore when they were gathered together, Pilate said unto them, Whom will ye that I release unto you? Barabbas, or Jesus which is called Christ?
18 For he knew that for envy they had delivered him.
19 ¶ When he was set down on the judgment seat, his wife sent unto him, saying, Have thou nothing to do with that just man: for I have suffered many things this day in a dream because of him.
20 But the chief priests and elders persuaded the multitude that they should ask Barabbas, and destroy Jesus.
21 The governor answered and said unto them, Whether of the twain will ye that I release unto you? They said, Barabbas.
22 Pilate saith unto them, What shall I do then with Jesus which is called Christ? They all say unto him, Let him be crucified.
23 And the governor said, Why, what evil hath he done? But they cried out the more, saying, Let him be crucified.
24 ¶ When Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying, I am innocent of the blood of this just person: see ye to it.
25 Then answered all the people, and said, His blood be on us, and on our children.
26 ¶ Then released he Barabbas unto them: and when he had scourged Jesus, he delivered him to be crucified.
27 Then the soldiers of the governor took Jesus into the common hall, and gathered unto him the whole band of soldiers.
28 And they stripped him, and put on him a scarlet robe.
29 ¶ And when they had plaited a crown of thorns, they put it upon his head, and a reed in his right hand: and they bowed the knee before him, and mocked him, saying, Hail, King of the Jews!
30 And they spit upon him, and took the reed, and smote him on the head.
31 And after that they had mocked him, they took the robe off from him, and put his own raiment on him, and led him away to crucify him.
32 And as they came out, they found a man of Cyrene, Simon by name: him they compelled to bear his cross.
33 And when they were come unto a place called Golgotha, that is to say, a place of a skull,
34 ¶ They gave him vinegar to drink mingled with gall: and when he had tasted thereof, he would not drink.
35 And they crucified him, and parted his garments, casting lots: that it might be fulfilled which was spoken by the prophet, They parted my garments among them, and upon my vesture did they cast lots.
36 And sitting down they watched him there;
37 And set up over his head his accusation written, THIS IS JESUS THE KING OF THE JEWS.
38 Then were there two thieves crucified with him, one on the right hand, and another on the left.
39 ¶ And they that passed by reviled him, wagging their heads,
40 And saying, Thou that destroyest the temple, and buildest it in three days, save thyself. If thou be the Son of God, come down from the cross.
41 Likewise also the chief priests mocking him, with the scribes and elders, said,
42 He saved others; himself he cannot save. If he be the King of Israel, let him now come down from the cross, and we will believe him.
43 He trusted in God; let him deliver him now, if he will have him: for he said, I am the Son of God.
44 The thieves also, which were crucified with him, cast the same in his teeth.
45 Now from the sixth hour there was darkness over all the land unto the ninth hour.
46 And about the ninth hour Jesus cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?
47 Some of them that stood there, when they heard that, said, This man calleth for Elias.
48 And straightway one of them ran, and took a sponge, and filled it with vinegar, and put it on a reed, and gave him to drink.
49 The rest said, Let be, let us see whether Elias will come to save him.
50 ¶ Jesus, when he had cried again with a loud voice, yielded up the ghost.
51 And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent;
52 And the graves were opened; and many bodies of the saints which slept arose,
53 And came out of the graves after his resurrection, and went into the holy city, and appeared unto many.
54 Now when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God.
55 And many women were there beholding afar off, which followed Jesus from Galilee, ministering unto him:
56 Among which was Mary Magdalene, and Mary the mother of James and Joses, and the mother of Zebedee’s children.
57 When the even was come, there came a rich man of Arimathæa, named Joseph, who also himself was Jesus’ disciple:
58 He went to Pilate, and begged the body of Jesus. Then Pilate commanded the body to be delivered.
59 And when Joseph had taken the body, he wrapped it in a clean linen cloth,
60 And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.
61 And there was Mary Magdalene, and the other Mary, sitting over against the sepulchre.
62 ¶ Now the next day, that followed the day of the preparation, the chief priests and Pharisees came together unto Pilate,
63 Saying, Sir, we remember that that deceiver said, while he was yet alive, After three days I will rise again.
64 Command therefore that the sepulchre be made sure until the third day, lest his disciples come by night, and steal him away, and say unto the people, He is risen from the dead: so the last error shall be worse than the first.
65 Pilate said unto them, Ye have a watch: go your way, make it as sure as ye can.
66 So they went, and made the sepulchre sure, sealing the stone, and setting a watch.`,
"matthew-28": `CHAPTER 28
Christ the Lord is risen—He appears to many—He has all power in heaven and earth—He sends the Apostles to teach and baptize all nations.
1 In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.
2 And, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.
3 His countenance was like lightning, and his raiment white as snow:
4 And for fear of him the keepers did shake, and became as dead men.
5 And the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified.
6 He is not here: for he is risen, as he said. Come, see the place where the Lord lay.
7 And go quickly, and tell his disciples that he is risen from the dead; and, behold, he goeth before you into Galilee; there shall ye see him: lo, I have told you.
8 And they departed quickly from the sepulchre with fear and great joy; and did run to bring his disciples word.
9 ¶ And as they went to tell his disciples, behold, Jesus met them, saying, All hail. And they came and held him by the feet, and worshipped him.
10 Then said Jesus unto them, Be not afraid: go tell my brethren that they go into Galilee, and there shall they see me.
11 ¶ Now when they were going, behold, some of the watch came into the city, and shewed unto the chief priests all the things that were done.
12 And when they were assembled with the elders, and had taken counsel, they gave large money unto the soldiers,
13 Saying, Say ye, His disciples came by night, and stole him away while we slept.
14 And if this come to the governor’s ears, we will persuade him, and secure you.
15 So they took the money, and did as they were taught: and this saying is commonly reported among the Jews until this day.
16 ¶ Then the eleven disciples went away into Galilee, into a mountain where Jesus had appointed them.
17 And when they saw him, they worshipped him: but some doubted.
18 And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.
19 ¶ Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:
20 Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.`,

"mark-01": `THE GOSPEL ACCORDING TO
ST MARK
CHAPTER 1
Jesus is baptized by John—He preaches the gospel, calls disciples, casts out devils, heals the sick, and cleanses a leper.
1 The beginning of the gospel of Jesus Christ, the Son of God;
2 As it is written in the prophets, Behold, I send my messenger before thy face, which shall prepare thy way before thee.
3 The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.
4 John did baptize in the wilderness, and preach the baptism of repentance for the remission of sins.
5 And there went out unto him all the land of Judæa, and they of Jerusalem, and were all baptized of him in the river of Jordan, confessing their sins.
6 And John was clothed with camel’s hair, and with a girdle of a skin about his loins; and he did eat locusts and wild honey;
7 And preached, saying, There cometh one mightier than I after me, the latchet of whose shoes I am not worthy to stoop down and unloose.
8 I indeed have baptized you with water: but he shall baptize you with the Holy Ghost.
9 And it came to pass in those days, that Jesus came from Nazareth of Galilee, and was baptized of John in Jordan.
10 And straightway coming up out of the water, he saw the heavens opened, and the Spirit like a dove descending upon him:
11 And there came a voice from heaven, saying, Thou art my beloved Son, in whom I am well pleased.
12 And immediately the Spirit driveth him into the wilderness.
13 And he was there in the wilderness forty days, tempted of Satan; and was with the wild beasts; and the angels ministered unto him.
14 Now after that John was put in prison, Jesus came into Galilee, preaching the gospel of the kingdom of God,
15 And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.
16 Now as he walked by the sea of Galilee, he saw Simon and Andrew his brother casting a net into the sea: for they were fishers.
17 And Jesus said unto them, Come ye after me, and I will make you to become fishers of men.
18 And straightway they forsook their nets, and followed him.
19 And when he had gone a little further thence, he saw James the son of Zebedee, and John his brother, who also were in the ship mending their nets.
20 And straightway he called them: and they left their father Zebedee in the ship with the hired servants, and went after him.
21 And they went into Capernaum; and straightway on the sabbath day he entered into the synagogue, and taught.
22 And they were astonished at his doctrine: for he taught them as one that had authority, and not as the scribes.
23 And there was in their synagogue a man with an unclean spirit; and he cried out,
24 Saying, Let us alone; what have we to do with thee, thou Jesus of Nazareth? art thou come to destroy us? I know thee who thou art, the Holy One of God.
25 And Jesus rebuked him, saying, Hold thy peace, and come out of him.
26 And when the unclean spirit had torn him, and cried with a loud voice, he came out of him.
27 And they were all amazed, insomuch that they questioned among themselves, saying, What thing is this? what new doctrine is this? for with authority commandeth he even the unclean spirits, and they do obey him.
28 And immediately his fame spread abroad throughout all the region round about Galilee.
29 And forthwith, when they were come out of the synagogue, they entered into the house of Simon and Andrew, with James and John.
30 But Simon’s wife’s mother lay sick of a fever, and anon they tell him of her.
31 And he came and took her by the hand, and lifted her up; and immediately the fever left her, and she ministered unto them.
32 And at even, when the sun did set, they brought unto him all that were diseased, and them that were possessed with devils.
33 And all the city was gathered together at the door.
34 And he healed many that were sick of divers diseases, and cast out many devils; and suffered not the devils to speak, because they knew him.
35 And in the morning, rising up a great while before day, he went out, and departed into a solitary place, and there prayed.
36 And Simon and they that were with him followed after him.
37 And when they had found him, they said unto him, All men seek for thee.
38 And he said unto them, Let us go into the next towns, that I may preach there also: for therefore came I forth.
39 And he preached in their synagogues throughout all Galilee, and cast out devils.
40 And there came a leper to him, beseeching him, and kneeling down to him, and saying unto him, If thou wilt, thou canst make me clean.
41 And Jesus, moved with compassion, put forth his hand, and touched him, and saith unto him, I will; be thou clean.
42 And as soon as he had spoken, immediately the leprosy departed from him, and he was cleansed.
43 And he straitly charged him, and forthwith sent him away;
44 And saith unto him, See thou say nothing to any man: but go thy way, shew thyself to the priest, and offer for thy cleansing those things which Moses commanded, for a testimony unto them.
45 But he went out, and began to publish it much, and to blaze abroad the matter, insomuch that Jesus could no more openly enter into the city, but was without in desert places: and they came to him from every quarter.`,
"mark-02": `CHAPTER 2
Jesus forgives sins, heals a paralytic, eats with tax gatherers and sinners, and announces that He is Lord of the Sabbath.
1 And again he entered into Capernaum after some days; and it was noised that he was in the house.
2 And straightway many were gathered together, insomuch that there was no room to receive them, no, not so much as about the door: and he preached the word unto them.
3 And they come unto him, bringing one sick of the palsy, which was borne of four.
4 And when they could not come nigh unto him for the press, they uncovered the roof where he was: and when they had broken it up, they let down the bed wherein the sick of the palsy lay.
5 When Jesus saw their faith, he said unto the sick of the palsy, Son, thy sins be forgiven thee.
6 But there were certain of the scribes sitting there, and reasoning in their hearts,
7 Why doth this man thus speak blasphemies? who can forgive sins but God only?
8 And immediately when Jesus perceived in his spirit that they so reasoned within themselves, he said unto them, Why reason ye these things in your hearts?
9 Whether is it easier to say to the sick of the palsy, Thy sins be forgiven thee; or to say, Arise, and take up thy bed, and walk?
10 But that ye may know that the Son of man hath power on earth to forgive sins, (he saith to the sick of the palsy,)
11 I say unto thee, Arise, and take up thy bed, and go thy way into thine house.
12 And immediately he arose, took up the bed, and went forth before them all; insomuch that they were all amazed, and glorified God, saying, We never saw it on this fashion.
13 And he went forth again by the sea side; and all the multitude resorted unto him, and he taught them.
14 And as he passed by, he saw Levi the son of Alphæus sitting at the receipt of custom, and said unto him, Follow me. And he arose and followed him.
15 And it came to pass, that, as Jesus sat at meat in his house, many publicans and sinners sat also together with Jesus and his disciples: for there were many, and they followed him.
16 And when the scribes and Pharisees saw him eat with publicans and sinners, they said unto his disciples, How is it that he eateth and drinketh with publicans and sinners?
17 When Jesus heard it, he saith unto them, They that are whole have no need of the physician, but they that are sick: I came not to call the righteous, but sinners to repentance.
18 And the disciples of John and of the Pharisees used to fast: and they come and say unto him, Why do the disciples of John and of the Pharisees fast, but thy disciples fast not?
19 And Jesus said unto them, Can the children of the bridechamber fast, while the bridegroom is with them? as long as they have the bridegroom with them, they cannot fast.
20 But the days will come, when the bridegroom shall be taken away from them, and then shall they fast in those days.
21 No man also seweth a piece of new cloth on an old garment: else the new piece that filled it up taketh away from the old, and the rent is made worse.
22 And no man putteth new wine into old bottles: else the new wine doth burst the bottles, and the wine is spilled, and the bottles will be marred: but new wine must be put into new bottles.
23 And it came to pass, that he went through the corn fields on the sabbath day; and his disciples began, as they went, to pluck the ears of corn.
24 And the Pharisees said unto him, Behold, why do they on the sabbath day that which is not lawful?
25 And he said unto them, Have ye never read what David did, when he had need, and was an hungred, he, and they that were with him?
26 How he went into the house of God in the days of Abiathar the high priest, and did eat the shewbread, which is not lawful to eat but for the priests, and gave also to them which were with him?
27 And he said unto them, The sabbath was made for man, and not man for the sabbath:
28 Therefore the Son of man is Lord also of the sabbath.`,
"mark-03": `CHAPTER 3
Jesus heals on the Sabbath day—He chooses and ordains the Twelve Apostles—He asks, Can Satan cast out Satan?—Jesus speaks of blasphemy against the Holy Ghost and identifies those who believe as being members of His family.
1 And he entered again into the synagogue; and there was a man there which had a withered hand.
2 And they watched him, whether he would heal him on the sabbath day; that they might accuse him.
3 And he saith unto the man which had the withered hand, Stand forth.
4 And he saith unto them, Is it lawful to do good on the sabbath days, or to do evil? to save life, or to kill? But they held their peace.
5 And when he had looked round about on them with anger, being grieved for the hardness of their hearts, he saith unto the man, Stretch forth thine hand. And he stretched it out: and his hand was restored whole as the other.
6 And the Pharisees went forth, and straightway took counsel with the Herodians against him, how they might destroy him.
7 But Jesus withdrew himself with his disciples to the sea: and a great multitude from Galilee followed him, and from Judæa,
8 And from Jerusalem, and from Idumæa, and from beyond Jordan; and they about Tyre and Sidon, a great multitude, when they had heard what great things he did, came unto him.
9 And he spake to his disciples, that a small ship should wait on him because of the multitude, lest they should throng him.
10 For he had healed many; insomuch that they pressed upon him for to touch him, as many as had plagues.
11 And unclean spirits, when they saw him, fell down before him, and cried, saying, Thou art the Son of God.
12 And he straitly charged them that they should not make him known.
13 And he goeth up into a mountain, and calleth unto him whom he would: and they came unto him.
14 And he ordained twelve, that they should be with him, and that he might send them forth to preach,
15 And to have power to heal sicknesses, and to cast out devils:
16 And Simon he surnamed Peter;
17 And James the son of Zebedee, and John the brother of James; and he surnamed them Boanerges, which is, The sons of thunder:
18 And Andrew, and Philip, and Bartholomew, and Matthew, and Thomas, and James the son of Alphæus, and Thaddæus, and Simon the Canaanite,
19 And Judas Iscariot, which also betrayed him: and they went into an house.
20 And the multitude cometh together again, so that they could not so much as eat bread.
21 And when his friends heard of it, they went out to lay hold on him: for they said, He is beside himself.
22 ¶ And the scribes which came down from Jerusalem said, He hath Beelzebub, and by the prince of the devils casteth he out devils.
23 And he called them unto him, and said unto them in parables, How can Satan cast out Satan?
24 And if a kingdom be divided against itself, that kingdom cannot stand.
25 And if a house be divided against itself, that house cannot stand.
26 And if Satan rise up against himself, and be divided, he cannot stand, but hath an end.
27 No man can enter into a strong man’s house, and spoil his goods, except he will first bind the strong man; and then he will spoil his house.
28 Verily I say unto you, All sins shall be forgiven unto the sons of men, and blasphemies wherewith soever they shall blaspheme:
29 But he that shall blaspheme against the Holy Ghost hath never forgiveness, but is in danger of eternal damnation:
30 Because they said, He hath an unclean spirit.
31 ¶ There came then his brethren and his mother, and, standing without, sent unto him, calling him.
32 And the multitude sat about him, and they said unto him, Behold, thy mother and thy brethren without seek for thee.
33 And he answered them, saying, Who is my mother, or my brethren?
34 And he looked round about on them which sat about him, and said, Behold my mother and my brethren!
35 For whosoever shall do the will of God, the same is my brother, and my sister, and mother.`,
"mark-04": `CHAPTER 4
Jesus gives the parables of the sower, the candle under a bushel, the seed growing secretly, and the mustard seed—He stills the tempest.
1 And he began again to teach by the sea side: and there was gathered unto him a great multitude, so that he entered into a ship, and sat in the sea; and the whole multitude was by the sea on the land.
2 And he taught them many things by parables, and said unto them in his doctrine,
3 Hearken; Behold, there went out a sower to sow:
4 And it came to pass, as he sowed, some fell by the way side, and the fowls of the air came and devoured it up.
5 And some fell on stony ground, where it had not much earth; and immediately it sprang up, because it had no depth of earth:
6 But when the sun was up, it was scorched; and because it had no root, it withered away.
7 And some fell among thorns, and the thorns grew up, and choked it, and it yielded no fruit.
8 And other fell on good ground, and did yield fruit that sprang up and increased; and brought forth, some thirty, and some sixty, and some an hundred.
9 And he said unto them, He that hath ears to hear, let him hear.
10 And when he was alone, they that were about him with the twelve asked of him the parable.
11 And he said unto them, Unto you it is given to know the mystery of the kingdom of God: but unto them that are without, all these things are done in parables:
12 That seeing they may see, and not perceive; and hearing they may hear, and not understand; lest at any time they should be converted, and their sins should be forgiven them.
13 And he said unto them, Know ye not this parable? and how then will ye know all parables?
14 ¶ The sower soweth the word.
15 And these are they by the way side, where the word is sown; but when they have heard, Satan cometh immediately, and taketh away the word that was sown in their hearts.
16 And these are they likewise which are sown on stony ground; who, when they have heard the word, immediately receive it with gladness;
17 And have no root in themselves, and so endure but for a time: afterward, when affliction or persecution ariseth for the word’s sake, immediately they are offended.
18 And these are they which are sown among thorns; such as hear the word,
19 And the cares of this world, and the deceitfulness of riches, and the lusts of other things entering in, choke the word, and it becometh unfruitful.
20 And these are they which are sown on good ground; such as hear the word, and receive it, and bring forth fruit, some thirtyfold, some sixty, and some an hundred.
21 ¶ And he said unto them, Is a candle brought to be put under a bushel, or under a bed? and not to be set on a candlestick?
22 For there is nothing hid, which shall not be manifested; neither was any thing kept secret, but that it should come abroad.
23 If any man have ears to hear, let him hear.
24 And he said unto them, Take heed what ye hear: with what measure ye mete, it shall be measured to you: and unto you that hear shall more be given.
25 For he that hath, to him shall be given: and he that hath not, from him shall be taken even that which he hath.
26 ¶ And he said, So is the kingdom of God, as if a man should cast seed into the ground;
27 And should sleep, and rise night and day, and the seed should spring and grow up, he knoweth not how.
28 For the earth bringeth forth fruit of herself; first the blade, then the ear, after that the full corn in the ear.
29 But when the fruit is brought forth, immediately he putteth in the sickle, because the harvest is come.
30 ¶ And he said, Whereunto shall we liken the kingdom of God? or with what comparison shall we compare it?
31 It is like a grain of mustard seed, which, when it is sown in the earth, is less than all the seeds that be in the earth:
32 But when it is sown, it groweth up, and becometh greater than all herbs, and shooteth out great branches; so that the fowls of the air may lodge under the shadow of it.
33 And with many such parables spake he the word unto them, as they were able to hear it.
34 But without a parable spake he not unto them: and when they were alone, he expounded all things to his disciples.
35 And the same day, when the even was come, he saith unto them, Let us pass over unto the other side.
36 And when they had sent away the multitude, they took him even as he was in the ship. And there were also with him other little ships.
37 And there arose a great storm of wind, and the waves beat into the ship, so that it was now full.
38 And he was in the hinder part of the ship, asleep on a pillow: and they awake him, and say unto him, Master, carest thou not that we perish?
39 And he arose, and rebuked the wind, and said unto the sea, Peace, be still. And the wind ceased, and there was a great calm.
40 And he said unto them, Why are ye so fearful? how is it that ye have no faith?
41 And they feared exceedingly, and said one to another, What manner of man is this, that even the wind and the sea obey him?`,
"mark-05": `CHAPTER 5
Jesus casts out a legion of devils, who then enter the swine—A woman is healed by touching Jesus’ clothes—He raises Jairus’s daughter from the dead.
1 And they came over unto the other side of the sea, into the country of the Gadarenes.
2 And when he was come out of the ship, immediately there met him out of the tombs a man with an unclean spirit,
3 Who had his dwelling among the tombs; and no man could bind him, no, not with chains:
4 Because that he had been often bound with fetters and chains, and the chains had been plucked asunder by him, and the fetters broken in pieces: neither could any man tame him.
5 And always, night and day, he was in the mountains, and in the tombs, crying, and cutting himself with stones.
6 But when he saw Jesus afar off, he ran and worshipped him,
7 And cried with a loud voice, and said, What have I to do with thee, Jesus, thou Son of the most high God? I adjure thee by God, that thou torment me not.
8 For he said unto him, Come out of the man, thou unclean spirit.
9 And he asked him, What is thy name? And he answered, saying, My name is Legion: for we are many.
10 And he besought him much that he would not send them away out of the country.
11 Now there was there nigh unto the mountains a great herd of swine feeding.
12 And all the devils besought him, saying, Send us into the swine, that we may enter into them.
13 And forthwith Jesus gave them leave. And the unclean spirits went out, and entered into the swine: and the herd ran violently down a steep place into the sea, (they were about two thousand;) and were choked in the sea.
14 And they that fed the swine fled, and told it in the city, and in the country. And they went out to see what it was that was done.
15 And they come to Jesus, and see him that was possessed with the devil, and had the legion, sitting, and clothed, and in his right mind: and they were afraid.
16 And they that saw it told them how it befell to him that was possessed with the devil, and also concerning the swine.
17 And they began to pray him to depart out of their coasts.
18 And when he was come into the ship, he that had been possessed with the devil prayed him that he might be with him.
19 Howbeit Jesus suffered him not, but saith unto him, Go home to thy friends, and tell them how great things the Lord hath done for thee, and hath had compassion on thee.
20 And he departed, and began to publish in Decapolis how great things Jesus had done for him: and all men did marvel.
21 And when Jesus was passed over again by ship unto the other side, much people gathered unto him: and he was nigh unto the sea.
22 And, behold, there cometh one of the rulers of the synagogue, Jairus by name; and when he saw him, he fell at his feet,
23 And besought him greatly, saying, My little daughter lieth at the point of death: I pray thee, come and lay thy hands on her, that she may be healed; and she shall live.
24 And Jesus went with him; and much people followed him, and thronged him.
25 And a certain woman, which had an issue of blood twelve years,
26 And had suffered many things of many physicians, and had spent all that she had, and was nothing bettered, but rather grew worse,
27 When she had heard of Jesus, came in the press behind, and touched his garment.
28 For she said, If I may touch but his clothes, I shall be whole.
29 And straightway the fountain of her blood was dried up; and she felt in her body that she was healed of that plague.
30 And Jesus, immediately knowing in himself that virtue had gone out of him, turned him about in the press, and said, Who touched my clothes?
31 And his disciples said unto him, Thou seest the multitude thronging thee, and sayest thou, Who touched me?
32 And he looked round about to see her that had done this thing.
33 But the woman fearing and trembling, knowing what was done in her, came and fell down before him, and told him all the truth.
34 And he said unto her, Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague.
35 While he yet spake, there came from the ruler of the synagogue’s house certain which said, Thy daughter is dead: why troublest thou the Master any further?
36 As soon as Jesus heard the word that was spoken, he saith unto the ruler of the synagogue, Be not afraid, only believe.
37 And he suffered no man to follow him, save Peter, and James, and John the brother of James.
38 And he cometh to the house of the ruler of the synagogue, and seeth the tumult, and them that wept and wailed greatly.
39 And when he was come in, he saith unto them, Why make ye this ado, and weep? the damsel is not dead, but sleepeth.
40 And they laughed him to scorn. But when he had put them all out, he taketh the father and the mother of the damsel, and them that were with him, and entereth in where the damsel was lying.
41 And he took the damsel by the hand, and said unto her, Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise.
42 And straightway the damsel arose, and walked; for she was of the age of twelve years. And they were astonished with a great astonishment.
43 And he charged them straitly that no man should know it; and commanded that something should be given her to eat.`,
"mark-06": `CHAPTER 6
Jesus sends forth the Twelve—John the Baptist is beheaded by Herod—Our Lord feeds the five thousand, walks on the water, and heals multitudes.
1 And he went out from thence, and came into his own country; and his disciples follow him.
2 And when the sabbath day was come, he began to teach in the synagogue: and many hearing him were astonished, saying, From whence hath this man these things? and what wisdom is this which is given unto him, that even such mighty works are wrought by his hands?
3 Is not this the carpenter, the son of Mary, the brother of James, and Joses, and of Juda, and Simon? and are not his sisters here with us? And they were offended at him.
4 But Jesus said unto them, A prophet is not without honour, but in his own country, and among his own kin, and in his own house.
5 And he could there do no mighty work, save that he laid his hands upon a few sick folk, and healed them.
6 And he marvelled because of their unbelief. And he went round about the villages, teaching.
7 ¶ And he called unto him the twelve, and began to send them forth by two and two; and gave them power over unclean spirits;
8 And commanded them that they should take nothing for their journey, save a staff only; no scrip, no bread, no money in their purse:
9 But be shod with sandals; and not put on two coats.
10 And he said unto them, In what place soever ye enter into an house, there abide till ye depart from that place.
11 And whosoever shall not receive you, nor hear you, when ye depart thence, shake off the dust under your feet for a testimony against them. Verily I say unto you, It shall be more tolerable for Sodom and Gomorrha in the day of judgment, than for that city.
12 And they went out, and preached that men should repent.
13 And they cast out many devils, and anointed with oil many that were sick, and healed them.
14 And king Herod heard of him; (for his name was spread abroad:) and he said, That John the Baptist was risen from the dead, and therefore mighty works do shew forth themselves in him.
15 Others said, That it is Elias. And others said, That it is a prophet, or as one of the prophets.
16 But when Herod heard thereof, he said, It is John, whom I beheaded: he is risen from the dead.
17 For Herod himself had sent forth and laid hold upon John, and bound him in prison for Herodias’ sake, his brother Philip’s wife: for he had married her.
18 For John had said unto Herod, It is not lawful for thee to have thy brother’s wife.
19 Therefore Herodias had a quarrel against him, and would have killed him; but she could not:
20 For Herod feared John, knowing that he was a just man and an holy, and observed him; and when he heard him, he did many things, and heard him gladly.
21 And when a convenient day was come, that Herod on his birthday made a supper to his lords, high captains, and chief estates of Galilee;
22 And when the daughter of the said Herodias came in, and danced, and pleased Herod and them that sat with him, the king said unto the damsel, Ask of me whatsoever thou wilt, and I will give it thee.
23 And he sware unto her, Whatsoever thou shalt ask of me, I will give it thee, unto the half of my kingdom.
24 And she went forth, and said unto her mother, What shall I ask? And she said, The head of John the Baptist.
25 And she came in straightway with haste unto the king, and asked, saying, I will that thou give me by and by in a charger the head of John the Baptist.
26 And the king was exceeding sorry; yet for his oath’s sake, and for their sakes which sat with him, he would not reject her.
27 And immediately the king sent an executioner, and commanded his head to be brought: and he went and beheaded him in the prison,
28 And brought his head in a charger, and gave it to the damsel: and the damsel gave it to her mother.
29 And when his disciples heard of it, they came and took up his corpse, and laid it in a tomb.
30 And the apostles gathered themselves together unto Jesus, and told him all things, both what they had done, and what they had taught.
31 And he said unto them, Come ye yourselves apart into a desert place, and rest a while: for there were many coming and going, and they had no leisure so much as to eat.
32 And they departed into a desert place by ship privately.
33 And the people saw them departing, and many knew him, and ran afoot thither out of all cities, and outwent them, and came together unto him.
34 And Jesus, when he came out, saw much people, and was moved with compassion toward them, because they were as sheep not having a shepherd: and he began to teach them many things.
35 And when the day was now far spent, his disciples came unto him, and said, This is a desert place, and now the time is far passed:
36 Send them away, that they may go into the country round about, and into the villages, and buy themselves bread: for they have nothing to eat.
37 He answered and said unto them, Give ye them to eat. And they say unto him, Shall we go and buy two hundred pennyworth of bread, and give them to eat?
38 He saith unto them, How many loaves have ye? go and see. And when they knew, they say, Five, and two fishes.
39 And he commanded them to make all sit down by companies upon the green grass.
40 And they sat down in ranks, by hundreds, and by fifties.
41 And when he had taken the five loaves and the two fishes, he looked up to heaven, and blessed, and brake the loaves, and gave them to his disciples to set before them; and the two fishes divided he among them all.
42 And they did all eat, and were filled.
43 And they took up twelve baskets full of the fragments, and of the fishes.
44 And they that did eat of the loaves were about five thousand men.
45 And straightway he constrained his disciples to get into the ship, and to go to the other side before unto Bethsaida, while he sent away the people.
46 And when he had sent them away, he departed into a mountain to pray.
47 And when even was come, the ship was in the midst of the sea, and he alone on the land.
48 And he saw them toiling in rowing; for the wind was contrary unto them: and about the fourth watch of the night he cometh unto them, walking upon the sea, and would have passed by them.
49 But when they saw him walking upon the sea, they supposed it had been a spirit, and cried out:
50 For they all saw him, and were troubled. And immediately he talked with them, and saith unto them, Be of good cheer: it is I; be not afraid.
51 And he went up unto them into the ship; and the wind ceased: and they were sore amazed in themselves beyond measure, and wondered.
52 For they considered not the miracle of the loaves: for their heart was hardened.
53 And when they had passed over, they came into the land of Gennesaret, and drew to the shore.
54 And when they were come out of the ship, straightway they knew him,
55 And ran through that whole region round about, and began to carry about in beds those that were sick, where they heard he was.
56 And whithersoever he entered, into villages, or cities, or country, they laid the sick in the streets, and besought him that they might touch if it were but the border of his garment: and as many as touched him were made whole.`,
"mark-07": `CHAPTER 7
Jesus reproves the Pharisees for their false traditions and ceremonies—He casts a devil out of the daughter of a Greek woman—He opens the ears and loosens the tongue of a person with an impediment.
1 Then came together unto him the Pharisees, and certain of the scribes, which came from Jerusalem.
2 And when they saw some of his disciples eat bread with defiled, that is to say, with unwashen, hands, they found fault.
3 For the Pharisees, and all the Jews, except they wash their hands oft, eat not, holding the tradition of the elders.
4 And when they come from the market, except they wash, they eat not. And many other things there be, which they have received to hold, as the washing of cups, and pots, brasen vessels, and of tables.
5 Then the Pharisees and scribes asked him, Why walk not thy disciples according to the tradition of the elders, but eat bread with unwashen hands?
6 He answered and said unto them, Well hath Esaias prophesied of you hypocrites, as it is written, This people honoureth me with their lips, but their heart is far from me.
7 Howbeit in vain do they worship me, teaching for doctrines the commandments of men.
8 For laying aside the commandment of God, ye hold the tradition of men, as the washing of pots and cups: and many other such like things ye do.
9 And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition.
10 For Moses said, Honour thy father and thy mother; and, Whoso curseth father or mother, let him die the death:
11 But ye say, If a man shall say to his father or mother, It is Corban, that is to say, a gift, by whatsoever thou mightest be profited by me; he shall be free.
12 And ye suffer him no more to do ought for his father or his mother;
13 Making the word of God of none effect through your tradition, which ye have delivered: and many such like things do ye.
14 ¶ And when he had called all the people unto him, he said unto them, Hearken unto me every one of you, and understand:
15 There is nothing from without a man, that entering into him can defile him: but the things which come out of him, those are they that defile the man.
16 If any man have ears to hear, let him hear.
17 And when he was entered into the house from the people, his disciples asked him concerning the parable.
18 And he saith unto them, Are ye so without understanding also? Do ye not perceive, that whatsoever thing from without entereth into the man, it cannot defile him;
19 Because it entereth not into his heart, but into the belly, and goeth out into the draught, purging all meats?
20 And he said, That which cometh out of the man, that defileth the man.
21 For from within, out of the heart of men, proceed evil thoughts, adulteries, fornications, murders,
22 Thefts, covetousness, wickedness, deceit, lasciviousness, an evil eye, blasphemy, pride, foolishness:
23 All these evil things come from within, and defile the man.
24 ¶ And from thence he arose, and went into the borders of Tyre and Sidon, and entered into an house, and would have no man know it: but he could not be hid.
25 For a certain woman, whose young daughter had an unclean spirit, heard of him, and came and fell at his feet:
26 The woman was a Greek, a Syrophenician by nation; and she besought him that he would cast forth the devil out of her daughter.
27 But Jesus said unto her, Let the children first be filled: for it is not meet to take the children’s bread, and to cast it unto the dogs.
28 And she answered and said unto him, Yes, Lord: yet the dogs under the table eat of the children’s crumbs.
29 And he said unto her, For this saying go thy way; the devil is gone out of thy daughter.
30 And when she was come to her house, she found the devil gone out, and her daughter laid upon the bed.
31 ¶ And again, departing from the coasts of Tyre and Sidon, he came unto the sea of Galilee, through the midst of the coasts of Decapolis.
32 And they bring unto him one that was deaf, and had an impediment in his speech; and they beseech him to put his hand upon him.
33 And he took him aside from the multitude, and put his fingers into his ears, and he spit, and touched his tongue;
34 And looking up to heaven, he sighed, and saith unto him, Ephphatha, that is, Be opened.
35 And straightway his ears were opened, and the string of his tongue was loosed, and he spake plain.
36 And he charged them that they should tell no man: but the more he charged them, so much the more a great deal they published it;
37 And were beyond measure astonished, saying, He hath done all things well: he maketh both the deaf to hear, and the dumb to speak.`,
"mark-08": `CHAPTER 8
Jesus feeds the four thousand—He counsels, Beware of the leaven of the Pharisees—He heals a blind man in Bethsaida—Peter testifies that Jesus is the Christ.
1 In those days the multitude being very great, and having nothing to eat, Jesus called his disciples unto him, and saith unto them,
2 I have compassion on the multitude, because they have now been with me three days, and have nothing to eat:
3 And if I send them away fasting to their own houses, they will faint by the way: for divers of them came from far.
4 And his disciples answered him, From whence can a man satisfy these men with bread here in the wilderness?
5 And he asked them, How many loaves have ye? And they said, Seven.
6 And he commanded the people to sit down on the ground: and he took the seven loaves, and gave thanks, and brake, and gave to his disciples to set before them; and they did set them before the people.
7 And they had a few small fishes: and he blessed, and commanded to set them also before them.
8 So they did eat, and were filled: and they took up of the broken meat that was left seven baskets.
9 And they that had eaten were about four thousand: and he sent them away.
10 ¶ And straightway he entered into a ship with his disciples, and came into the parts of Dalmanutha.
11 And the Pharisees came forth, and began to question with him, seeking of him a sign from heaven, tempting him.
12 And he sighed deeply in his spirit, and saith, Why doth this generation seek after a sign? verily I say unto you, There shall no sign be given unto this generation.
13 And he left them, and entering into the ship again departed to the other side.
14 ¶ Now the disciples had forgotten to take bread, neither had they in the ship with them more than one loaf.
15 And he charged them, saying, Take heed, beware of the leaven of the Pharisees, and of the leaven of Herod.
16 And they reasoned among themselves, saying, It is because we have no bread.
17 And when Jesus knew it, he saith unto them, Why reason ye, because ye have no bread? perceive ye not yet, neither understand? have ye your heart yet hardened?
18 Having eyes, see ye not? and having ears, hear ye not? and do ye not remember?
19 When I brake the five loaves among five thousand, how many baskets full of fragments took ye up? They say unto him, Twelve.
20 And when the seven among four thousand, how many baskets full of fragments took ye up? And they said, Seven.
21 And he said unto them, How is it that ye do not understand?
22 ¶ And he cometh to Bethsaida; and they bring a blind man unto him, and besought him to touch him.
23 And he took the blind man by the hand, and led him out of the town; and when he had spit on his eyes, and put his hands upon him, he asked him if he saw ought.
24 And he looked up, and said, I see men as trees, walking.
25 After that he put his hands again upon his eyes, and made him look up: and he was restored, and saw every man clearly.
26 And he sent him away to his house, saying, Neither go into the town, nor tell it to any in the town.
27 ¶ And Jesus went out, and his disciples, into the towns of Cæsarea Philippi: and by the way he asked his disciples, saying unto them, Whom do men say that I am?
28 And they answered, John the Baptist: but some say, Elias; and others, One of the prophets.
29 And he saith unto them, But whom say ye that I am? And Peter answereth and saith unto him, Thou art the Christ.
30 And he charged them that they should tell no man of him.
31 And he began to teach them, that the Son of man must suffer many things, and be rejected of the elders, and of the chief priests, and scribes, and be killed, and after three days rise again.
32 And he spake that saying openly. And Peter took him, and began to rebuke him.
33 But when he had turned about and looked on his disciples, he rebuked Peter, saying, Get thee behind me, Satan: for thou savourest not the things that be of God, but the things that be of men.
34 ¶ And when he had called the people unto him with his disciples also, he said unto them, Whosoever will come after me, let him deny himself, and take up his cross, and follow me.
35 For whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel’s, the same shall save it.
36 For what shall it profit a man, if he shall gain the whole world, and lose his own soul?
37 Or what shall a man give in exchange for his soul?
38 Whosoever therefore shall be ashamed of me and of my words in this adulterous and sinful generation; of him also shall the Son of man be ashamed, when he cometh in the glory of his Father with the holy angels.`,
"mark-09": `CHAPTER 9
Jesus is transfigured on the mountain—He casts out an unclean spirit—He teaches concerning His death and resurrection, who will be greatest, and the condemnation of those who offend His little ones.
1 And he said unto them, Verily I say unto you, That there be some of them that stand here, which shall not taste of death, till they have seen the kingdom of God come with power.
2 ¶ And after six days Jesus taketh with him Peter, and James, and John, and leadeth them up into an high mountain apart by themselves: and he was transfigured before them.
3 And his raiment became shining, exceeding white as snow; so as no fuller on earth can white them.
4 And there appeared unto them Elias with Moses: and they were talking with Jesus.
5 And Peter answered and said to Jesus, Master, it is good for us to be here: and let us make three tabernacles; one for thee, and one for Moses, and one for Elias.
6 For he wist not what to say; for they were sore afraid.
7 And there was a cloud that overshadowed them: and a voice came out of the cloud, saying, This is my beloved Son: hear him.
8 And suddenly, when they had looked round about, they saw no man any more, save Jesus only with themselves.
9 And as they came down from the mountain, he charged them that they should tell no man what things they had seen, till the Son of man were risen from the dead.
10 And they kept that saying with themselves, questioning one with another what the rising from the dead should mean.
11 ¶ And they asked him, saying, Why say the scribes that Elias must first come?
12 And he answered and told them, Elias verily cometh first, and restoreth all things; and how it is written of the Son of man, that he must suffer many things, and be set at nought.
13 But I say unto you, That Elias is indeed come, and they have done unto him whatsoever they listed, as it is written of him.
14 ¶ And when he came to his disciples, he saw a great multitude about them, and the scribes questioning with them.
15 And straightway all the people, when they beheld him, were greatly amazed, and running to him saluted him.
16 And he asked the scribes, What question ye with them?
17 And one of the multitude answered and said, Master, I have brought unto thee my son, which hath a dumb spirit;
18 And wheresoever he taketh him, he teareth him: and he foameth, and gnasheth with his teeth, and pineth away: and I spake to thy disciples that they should cast him out; and they could not.
19 He answereth him, and saith, O faithless generation, how long shall I be with you? how long shall I suffer you? bring him unto me.
20 And they brought him unto him: and when he saw him, straightway the spirit tare him; and he fell on the ground, and wallowed foaming.
21 And he asked his father, How long is it ago since this came unto him? And he said, Of a child.
22 And ofttimes it hath cast him into the fire, and into the waters, to destroy him: but if thou canst do any thing, have compassion on us, and help us.
23 Jesus said unto him, If thou canst believe, all things are possible to him that believeth.
24 And straightway the father of the child cried out, and said with tears, Lord, I believe; help thou mine unbelief.
25 When Jesus saw that the people came running together, he rebuked the foul spirit, saying unto him, Thou dumb and deaf spirit, I charge thee, come out of him, and enter no more into him.
26 And the spirit cried, and rent him sore, and came out of him: and he was as one dead; insomuch that many said, He is dead.
27 But Jesus took him by the hand, and lifted him up; and he arose.
28 And when he was come into the house, his disciples asked him privately, Why could not we cast him out?
29 And he said unto them, This kind can come forth by nothing, but by prayer and fasting.
30 ¶ And they departed thence, and passed through Galilee; and he would not that any man should know it.
31 For he taught his disciples, and said unto them, The Son of man is delivered into the hands of men, and they shall kill him; and after that he is killed, he shall rise the third day.
32 But they understood not that saying, and were afraid to ask him.
33 ¶ And he came to Capernaum: and being in the house he asked them, What was it that ye disputed among yourselves by the way?
34 But they held their peace: for by the way they had disputed among themselves, who should be the greatest.
35 And he sat down, and called the twelve, and saith unto them, If any man desire to be first, the same shall be last of all, and servant of all.
36 And he took a child, and set him in the midst of them: and when he had taken him in his arms, he said unto them,
37 Whosoever shall receive one of such children in my name, receiveth me: and whosoever shall receive me, receiveth not me, but him that sent me.
38 ¶ And John answered him, saying, Master, we saw one casting out devils in thy name, and he followeth not us: and we forbad him, because he followeth not us.
39 But Jesus said, Forbid him not: for there is no man which shall do a miracle in my name, that can lightly speak evil of me.
40 For he that is not against us is on our part.
41 For whosoever shall give you a cup of water to drink in my name, because ye belong to Christ, verily I say unto you, he shall not lose his reward.
42 And whosoever shall offend one of these little ones that believe in me, it is better for him that a millstone were hanged about his neck, and he were cast into the sea.
43 And if thy hand offend thee, cut it off: it is better for thee to enter into life maimed, than having two hands to go into hell, into the fire that never shall be quenched:
44 Where their worm dieth not, and the fire is not quenched.
45 And if thy foot offend thee, cut it off: it is better for thee to enter halt into life, than having two feet to be cast into hell, into the fire that never shall be quenched:
46 Where their worm dieth not, and the fire is not quenched.
47 And if thine eye offend thee, pluck it out: it is better for thee to enter into the kingdom of God with one eye, than having two eyes to be cast into hell fire:
48 Where their worm dieth not, and the fire is not quenched.
49 For every one shall be salted with fire, and every sacrifice shall be salted with salt.
50 Salt is good: but if the salt have lost his saltness, wherewith will ye season it? Have salt in yourselves, and have peace one with another.`,
"mark-10": `CHAPTER 10
Jesus teaches the higher law of marriage—He blesses little children—Jesus counsels the rich young man, foretells His own death, and heals blind Bartimæus.
1 And he arose from thence, and cometh into the coasts of Judæa by the farther side of Jordan: and the people resort unto him again; and, as he was wont, he taught them again.
2 ¶ And the Pharisees came to him, and asked him, Is it lawful for a man to put away his wife? tempting him.
3 And he answered and said unto them, What did Moses command you?
4 And they said, Moses suffered to write a bill of divorcement, and to put her away.
5 And Jesus answered and said unto them, For the hardness of your heart he wrote you this precept.
6 But from the beginning of the creation God made them male and female.
7 For this cause shall a man leave his father and mother, and cleave to his wife;
8 And they twain shall be one flesh: so then they are no more twain, but one flesh.
9 What therefore God hath joined together, let not man put asunder.
10 And in the house his disciples asked him again of the same matter.
11 And he saith unto them, Whosoever shall put away his wife, and marry another, committeth adultery against her.
12 And if a woman shall put away her husband, and be married to another, she committeth adultery.
13 ¶ And they brought young children to him, that he should touch them: and his disciples rebuked those that brought them.
14 But when Jesus saw it, he was much displeased, and said unto them, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.
15 Verily I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein.
16 And he took them up in his arms, put his hands upon them, and blessed them.
17 ¶ And when he was gone forth into the way, there came one running, and kneeled to him, and asked him, Good Master, what shall I do that I may inherit eternal life?
18 And Jesus said unto him, Why callest thou me good? there is none good but one, that is, God.
19 Thou knowest the commandments, Do not commit adultery, Do not kill, Do not steal, Do not bear false witness, Defraud not, Honour thy father and mother.
20 And he answered and said unto him, Master, all these have I observed from my youth.
21 Then Jesus beholding him loved him, and said unto him, One thing thou lackest: go thy way, sell whatsoever thou hast, and give to the poor, and thou shalt have treasure in heaven: and come, take up the cross, and follow me.
22 And he was sad at that saying, and went away grieved: for he had great possessions.
23 ¶ And Jesus looked round about, and saith unto his disciples, How hardly shall they that have riches enter into the kingdom of God!
24 And the disciples were astonished at his words. But Jesus answereth again, and saith unto them, Children, how hard is it for them that trust in riches to enter into the kingdom of God!
25 It is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.
26 And they were astonished out of measure, saying among themselves, Who then can be saved?
27 And Jesus looking upon them saith, With men it is impossible, but not with God: for with God all things are possible.
28 ¶ Then Peter began to say unto him, Lo, we have left all, and have followed thee.
29 And Jesus answered and said, Verily I say unto you, There is no man that hath left house, or brethren, or sisters, or father, or mother, or wife, or children, or lands, for my sake, and the gospel’s,
30 But he shall receive an hundredfold now in this time, houses, and brethren, and sisters, and mothers, and children, and lands, with persecutions; and in the world to come eternal life.
31 But many that are first shall be last; and the last first.
32 ¶ And they were in the way going up to Jerusalem; and Jesus went before them: and they were amazed; and as they followed, they were afraid. And he took again the twelve, and began to tell them what things should happen unto him,
33 Saying, Behold, we go up to Jerusalem; and the Son of man shall be delivered unto the chief priests, and unto the scribes; and they shall condemn him to death, and shall deliver him to the Gentiles:
34 And they shall mock him, and shall scourge him, and shall spit upon him, and shall kill him: and the third day he shall rise again.
35 ¶ And James and John, the sons of Zebedee, come unto him, saying, Master, we would that thou shouldest do for us whatsoever we shall desire.
36 And he said unto them, What would ye that I should do for you?
37 They said unto him, Grant unto us that we may sit, one on thy right hand, and the other on thy left hand, in thy glory.
38 But Jesus said unto them, Ye know not what ye ask: can ye drink of the cup that I drink of? and be baptized with the baptism that I am baptized with?
39 And they said unto him, We can. And Jesus said unto them, Ye shall indeed drink of the cup that I drink of; and with the baptism that I am baptized withal shall ye be baptized:
40 But to sit on my right hand and on my left hand is not mine to give; but it shall be given to them for whom it is prepared.
41 And when the ten heard it, they began to be much displeased with James and John.
42 But Jesus called them to him, and saith unto them, Ye know that they which are accounted to rule over the Gentiles exercise lordship over them; and their great ones exercise authority upon them.
43 But so shall it not be among you: but whosoever will be great among you, shall be your minister:
44 And whosoever of you will be the chiefest, shall be servant of all.
45 For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.
46 ¶ And they came to Jericho: and as he went out of Jericho with his disciples and a great number of people, blind Bartimæus, the son of Timæus, sat by the highway side begging.
47 And when he heard that it was Jesus of Nazareth, he began to cry out, and say, Jesus, thou Son of David, have mercy on me.
48 And many charged him that he should hold his peace: but he cried the more a great deal, Thou Son of David, have mercy on me.
49 And Jesus stood still, and commanded him to be called. And they call the blind man, saying unto him, Be of good comfort, rise; he calleth thee.
50 And he, casting away his garment, rose, and came to Jesus.
51 And Jesus answered and said unto him, What wilt thou that I should do unto thee? The blind man said unto him, Lord, that I might receive my sight.
52 And Jesus said unto him, Go thy way; thy faith hath made thee whole. And immediately he received his sight, and followed Jesus in the way.`,
"mark-11": `CHAPTER 11
Jesus rides into Jerusalem amid shouts of hosanna—He curses a fig tree, drives the money changers from the temple, and confounds the scribes on the matter of authority.
1 And when they came nigh to Jerusalem, unto Bethphage and Bethany, at the mount of Olives, he sendeth forth two of his disciples,
2 And saith unto them, Go your way into the village over against you: and as soon as ye be entered into it, ye shall find a colt tied, whereon never man sat; loose him, and bring him.
3 And if any man say unto you, Why do ye this? say ye that the Lord hath need of him; and straightway he will send him hither.
4 And they went their way, and found the colt tied by the door without in a place where two ways met; and they loose him.
5 And certain of them that stood there said unto them, What do ye, loosing the colt?
6 And they said unto them even as Jesus had commanded: and they let them go.
7 And they brought the colt to Jesus, and cast their garments on him; and he sat upon him.
8 And many spread their garments in the way: and others cut down branches off the trees, and strawed them in the way.
9 And they that went before, and they that followed, cried, saying, Hosanna; Blessed is he that cometh in the name of the Lord:
10 Blessed be the kingdom of our father David, that cometh in the name of the Lord: Hosanna in the highest.
11 And Jesus entered into Jerusalem, and into the temple: and when he had looked round about upon all things, and now the eventide was come, he went out unto Bethany with the twelve.
12 ¶ And on the morrow, when they were come from Bethany, he was hungry:
13 And seeing a fig tree afar off having leaves, he came, if haply he might find any thing thereon: and when he came to it, he found nothing but leaves; for the time of figs was not yet.
14 And Jesus answered and said unto it, No man eat fruit of thee hereafter for ever. And his disciples heard it.
15 ¶ And they come to Jerusalem: and Jesus went into the temple, and began to cast out them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves;
16 And would not suffer that any man should carry any vessel through the temple.
17 And he taught, saying unto them, Is it not written, My house shall be called of all nations the house of prayer? but ye have made it a den of thieves.
18 And the scribes and chief priests heard it, and sought how they might destroy him: for they feared him, because all the people was astonished at his doctrine.
19 And when even was come, he went out of the city.
20 ¶ And in the morning, as they passed by, they saw the fig tree dried up from the roots.
21 And Peter calling to remembrance saith unto him, Master, behold, the fig tree which thou cursedst is withered away.
22 And Jesus answering saith unto them, Have faith in God.
23 For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith.
24 Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.
25 And when ye stand praying, forgive, if ye have ought against any: that your Father also which is in heaven may forgive you your trespasses.
26 But if ye do not forgive, neither will your Father which is in heaven forgive your trespasses.
27 ¶ And they come again to Jerusalem: and as he was walking in the temple, there come to him the chief priests, and the scribes, and the elders,
28 And say unto him, By what authority doest thou these things? and who gave thee this authority to do these things?
29 And Jesus answered and said unto them, I will also ask of you one question, and answer me, and I will tell you by what authority I do these things.
30 The baptism of John, was it from heaven, or of men? answer me.
31 And they reasoned with themselves, saying, If we shall say, From heaven; he will say, Why then did ye not believe him?
32 But if we shall say, Of men; they feared the people: for all men counted John, that he was a prophet indeed.
33 And they answered and said unto Jesus, We cannot tell. And Jesus answering saith unto them, Neither do I tell you by what authority I do these things.`,
"mark-12": `CHAPTER 12
Jesus gives the parable of the wicked husbandmen—He speaks of paying taxes, celestial marriage, the two great commandments, the divine sonship of Christ, and the widow’s mites.
1 And he began to speak unto them by parables. A certain man planted a vineyard, and set an hedge about it, and digged a place for the winefat, and built a tower, and let it out to husbandmen, and went into a far country.
2 And at the season he sent to the husbandmen a servant, that he might receive from the husbandmen of the fruit of the vineyard.
3 And they caught him, and beat him, and sent him away empty.
4 And again he sent unto them another servant; and at him they cast stones, and wounded him in the head, and sent him away shamefully handled.
5 And again he sent another; and him they killed, and many others; beating some, and killing some.
6 Having yet therefore one son, his wellbeloved, he sent him also last unto them, saying, They will reverence my son.
7 But those husbandmen said among themselves, This is the heir; come, let us kill him, and the inheritance shall be ours.
8 And they took him, and killed him, and cast him out of the vineyard.
9 What shall therefore the lord of the vineyard do? he will come and destroy the husbandmen, and will give the vineyard unto others.
10 And have ye not read this scripture; The stone which the builders rejected is become the head of the corner:
11 This was the Lord’s doing, and it is marvellous in our eyes?
12 And they sought to lay hold on him, but feared the people: for they knew that he had spoken the parable against them: and they left him, and went their way.
13 ¶ And they send unto him certain of the Pharisees and of the Herodians, to catch him in his words.
14 And when they were come, they say unto him, Master, we know that thou art true, and carest for no man: for thou regardest not the person of men, but teachest the way of God in truth: Is it lawful to give tribute to Cæsar, or not?
15 Shall we give, or shall we not give? But he, knowing their hypocrisy, said unto them, Why tempt ye me? bring me a penny, that I may see it.
16 And they brought it. And he saith unto them, Whose is this image and superscription? And they said unto him, Cæsar’s.
17 And Jesus answering said unto them, Render to Cæsar the things that are Cæsar’s, and to God the things that are God’s. And they marvelled at him.
18 ¶ Then come unto him the Sadducees, which say there is no resurrection; and they asked him, saying,
19 Master, Moses wrote unto us, If a man’s brother die, and leave his wife behind him, and leave no children, that his brother should take his wife, and raise up seed unto his brother.
20 Now there were seven brethren: and the first took a wife, and dying left no seed.
21 And the second took her, and died, neither left he any seed: and the third likewise.
22 And the seven had her, and left no seed: last of all the woman died also.
23 In the resurrection therefore, when they shall rise, whose wife shall she be of them? for the seven had her to wife.
24 And Jesus answering said unto them, Do ye not therefore err, because ye know not the scriptures, neither the power of God?
25 For when they shall rise from the dead, they neither marry, nor are given in marriage; but are as the angels which are in heaven.
26 And as touching the dead, that they rise: have ye not read in the book of Moses, how in the bush God spake unto him, saying, I am the God of Abraham, and the God of Isaac, and the God of Jacob?
27 He is not the God of the dead, but the God of the living: ye therefore do greatly err.
28 ¶ And one of the scribes came, and having heard them reasoning together, and perceiving that he had answered them well, asked him, Which is the first commandment of all?
29 And Jesus answered him, The first of all the commandments is, Hear, O Israel; The Lord our God is one Lord:
30 And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.
31 And the second is like, namely this, Thou shalt love thy neighbour as thyself. There is none other commandment greater than these.
32 And the scribe said unto him, Well, Master, thou hast said the truth: for there is one God; and there is none other but he:
33 And to love him with all the heart, and with all the understanding, and with all the soul, and with all the strength, and to love his neighbour as himself, is more than all whole burnt offerings and sacrifices.
34 And when Jesus saw that he answered discreetly, he said unto him, Thou art not far from the kingdom of God. And no man after that durst ask him any question.
35 ¶ And Jesus answered and said, while he taught in the temple, How say the scribes that Christ is the Son of David?
36 For David himself said by the Holy Ghost, The Lord said to my Lord, Sit thou on my right hand, till I make thine enemies thy footstool.
37 David therefore himself calleth him Lord; and whence is he then his son? And the common people heard him gladly.
38 ¶ And he said unto them in his doctrine, Beware of the scribes, which love to go in long clothing, and love salutations in the marketplaces,
39 And the chief seats in the synagogues, and the uppermost rooms at feasts:
40 Which devour widows’ houses, and for a pretence make long prayers: these shall receive greater damnation.
41 ¶ And Jesus sat over against the treasury, and beheld how the people cast money into the treasury: and many that were rich cast in much.
42 And there came a certain poor widow, and she threw in two mites, which make a farthing.
43 And he called unto him his disciples, and saith unto them, Verily I say unto you, That this poor widow hath cast more in, than all they which have cast into the treasury:
44 For all they did cast in of their abundance; but she of her want did cast in all that she had, even all her living.`,
"mark-13": `CHAPTER 13
Jesus tells of the calamities and signs preceding the Second Coming—There will be false Christs and false prophets—He gives the parable of the fig tree.
1 And as he went out of the temple, one of his disciples saith unto him, Master, see what manner of stones and what buildings are here!
2 And Jesus answering said unto him, Seest thou these great buildings? there shall not be left one stone upon another, that shall not be thrown down.
3 And as he sat upon the mount of Olives over against the temple, Peter and James and John and Andrew asked him privately,
4 Tell us, when shall these things be? and what shall be the sign when all these things shall be fulfilled?
5 And Jesus answering them began to say, Take heed lest any man deceive you:
6 For many shall come in my name, saying, I am Christ; and shall deceive many.
7 And when ye shall hear of wars and rumours of wars, be ye not troubled: for such things must needs be; but the end shall not be yet.
8 For nation shall rise against nation, and kingdom against kingdom: and there shall be earthquakes in divers places, and there shall be famines and troubles: these are the beginnings of sorrows.
9 ¶ But take heed to yourselves: for they shall deliver you up to councils; and in the synagogues ye shall be beaten: and ye shall be brought before rulers and kings for my sake, for a testimony against them.
10 And the gospel must first be published among all nations.
11 But when they shall lead you, and deliver you up, take no thought beforehand what ye shall speak, neither do ye premeditate: but whatsoever shall be given you in that hour, that speak ye: for it is not ye that speak, but the Holy Ghost.
12 Now the brother shall betray the brother to death, and the father the son; and children shall rise up against their parents, and shall cause them to be put to death.
13 And ye shall be hated of all men for my name’s sake: but he that shall endure unto the end, the same shall be saved.
14 ¶ But when ye shall see the abomination of desolation, spoken of by Daniel the prophet, standing where it ought not, (let him that readeth understand,) then let them that be in Judæa flee to the mountains:
15 And let him that is on the housetop not go down into the house, neither enter therein, to take any thing out of his house:
16 And let him that is in the field not turn back again for to take up his garment.
17 But woe to them that are with child, and to them that give suck in those days!
18 And pray ye that your flight be not in the winter.
19 For in those days shall be affliction, such as was not from the beginning of the creation which God created unto this time, neither shall be.
20 And except that the Lord had shortened those days, no flesh should be saved: but for the elect’s sake, whom he hath chosen, he hath shortened the days.
21 And then if any man shall say to you, Lo, here is Christ; or, lo, he is there; believe him not:
22 For false Christs and false prophets shall rise, and shall shew signs and wonders, to seduce, if it were possible, even the elect.
23 But take ye heed: behold, I have foretold you all things.
24 ¶ But in those days, after that tribulation, the sun shall be darkened, and the moon shall not give her light,
25 And the stars of heaven shall fall, and the powers that are in heaven shall be shaken.
26 And then shall they see the Son of man coming in the clouds with great power and glory.
27 And then shall he send his angels, and shall gather together his elect from the four winds, from the uttermost part of the earth to the uttermost part of heaven.
28 Now learn a parable of the fig tree; When her branch is yet tender, and putteth forth leaves, ye know that summer is near:
29 So ye in like manner, when ye shall see these things come to pass, know that it is nigh, even at the doors.
30 Verily I say unto you, that this generation shall not pass, till all these things be done.
31 Heaven and earth shall pass away: but my words shall not pass away.
32 ¶ But of that day and that hour knoweth no man, no, not the angels which are in heaven, neither the Son, but the Father.
33 Take ye heed, watch and pray: for ye know not when the time is.
34 For the Son of man is as a man taking a far journey, who left his house, and gave authority to his servants, and to every man his work, and commanded the porter to watch.
35 Watch ye therefore: for ye know not when the master of the house cometh, at even, or at midnight, or at the cockcrowing, or in the morning:
36 Lest coming suddenly he find you sleeping.
37 And what I say unto you I say unto all, Watch.`,
"mark-14": `CHAPTER 14
Jesus is anointed with oil—He eats the Passover, institutes the sacrament, suffers in Gethsemane, and is betrayed by Judas—Jesus is falsely accused, and Peter denies that he knows Him.
1 After two days was the feast of the passover, and of unleavened bread: and the chief priests and the scribes sought how they might take him by craft, and put him to death.
2 But they said, Not on the feast day, lest there be an uproar of the people.
3 ¶ And being in Bethany in the house of Simon the leper, as he sat at meat, there came a woman having an alabaster box of ointment of spikenard very precious; and she brake the box, and poured it on his head.
4 And there were some that had indignation within themselves, and said, Why was this waste of the ointment made?
5 For it might have been sold for more than three hundred pence, and have been given to the poor. And they murmured against her.
6 And Jesus said, Let her alone; why trouble ye her? she hath wrought a good work on me.
7 For ye have the poor with you always, and whensoever ye will ye may do them good: but me ye have not always.
8 She hath done what she could: she is come aforehand to anoint my body to the burying.
9 Verily I say unto you, Wheresoever this gospel shall be preached throughout the whole world, this also that she hath done shall be spoken of for a memorial of her.
10 ¶ And Judas Iscariot, one of the twelve, went unto the chief priests, to betray him unto them.
11 And when they heard it, they were glad, and promised to give him money. And he sought how he might conveniently betray him.
12 ¶ And the first day of unleavened bread, when they killed the passover, his disciples said unto him, Where wilt thou that we go and prepare that thou mayest eat the passover?
13 And he sendeth forth two of his disciples, and saith unto them, Go ye into the city, and there shall meet you a man bearing a pitcher of water: follow him.
14 And wheresoever he shall go in, say ye to the goodman of the house, The Master saith, Where is the guestchamber, where I shall eat the passover with my disciples?
15 And he will shew you a large upper room furnished and prepared: there make ready for us.
16 And his disciples went forth, and came into the city, and found as he had said unto them: and they made ready the passover.
17 And in the evening he cometh with the twelve.
18 And as they sat and did eat, Jesus said, Verily I say unto you, One of you which eateth with me shall betray me.
19 And they began to be sorrowful, and to say unto him one by one, Is it I? and another said, Is it I?
20 And he answered and said unto them, It is one of the twelve, that dippeth with me in the dish.
21 The Son of man indeed goeth, as it is written of him: but woe to that man by whom the Son of man is betrayed! good were it for that man if he had never been born.
22 ¶ And as they did eat, Jesus took bread, and blessed, and brake it, and gave to them, and said, Take, eat: this is my body.
23 And he took the cup, and when he had given thanks, he gave it to them: and they all drank of it.
24 And he said unto them, This is my blood of the new testament, which is shed for many.
25 Verily I say unto you, I will drink no more of the fruit of the vine, until that day that I drink it new in the kingdom of God.
26 ¶ And when they had sung an hymn, they went out into the mount of Olives.
27 And Jesus saith unto them, All ye shall be offended because of me this night: for it is written, I will smite the shepherd, and the sheep shall be scattered.
28 But after that I am risen, I will go before you into Galilee.
29 But Peter said unto him, Although all shall be offended, yet will not I.
30 And Jesus saith unto him, Verily I say unto thee, That this day, even in this night, before the cock crow twice, thou shalt deny me thrice.
31 But he spake the more vehemently, If I should die with thee, I will not deny thee in any wise. Likewise also said they all.
32 And they came to a place which was named Gethsemane: and he saith to his disciples, Sit ye here, while I shall pray.
33 And he taketh with him Peter and James and John, and began to be sore amazed, and to be very heavy;
34 And saith unto them, My soul is exceeding sorrowful unto death: tarry ye here, and watch.
35 And he went forward a little, and fell on the ground, and prayed that, if it were possible, the hour might pass from him.
36 And he said, Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt.
37 And he cometh, and findeth them sleeping, and saith unto Peter, Simon, sleepest thou? couldest not thou watch one hour?
38 Watch ye and pray, lest ye enter into temptation. The spirit truly is ready, but the flesh is weak.
39 And again he went away, and prayed, and spake the same words.
40 And when he returned, he found them asleep again, (for their eyes were heavy,) neither wist they what to answer him.
41 And he cometh the third time, and saith unto them, Sleep on now, and take your rest: it is enough, the hour is come; behold, the Son of man is betrayed into the hands of sinners.
42 Rise up, let us go; lo, he that betrayeth me is at hand.
43 ¶ And immediately, while he yet spake, cometh Judas, one of the twelve, and with him a great multitude with swords and staves, from the chief priests and the scribes and the elders.
44 And he that betrayed him had given them a token, saying, Whomsoever I shall kiss, that same is he; take him, and lead him away safely.
45 And as soon as he was come, he goeth straightway to him, and saith, Master, master; and kissed him.
46 ¶ And they laid their hands on him, and took him.
47 And one of them that stood by drew a sword, and smote a servant of the high priest, and cut off his ear.
48 And Jesus answered and said unto them, Are ye come out, as against a thief, with swords and with staves to take me?
49 I was daily with you in the temple teaching, and ye took me not: but the scriptures must be fulfilled.
50 And they all forsook him, and fled.
51 And there followed him a certain young man, having a linen cloth cast about his naked body; and the young men laid hold on him:
52 And he left the linen cloth, and fled from them naked.
53 ¶ And they led Jesus away to the high priest: and with him were assembled all the chief priests and the elders and the scribes.
54 And Peter followed him afar off, even into the palace of the high priest: and he sat with the servants, and warmed himself at the fire.
55 And the chief priests and all the council sought for witness against Jesus to put him to death; and found none.
56 For many bare false witness against him, but their witness agreed not together.
57 And there arose certain, and bare false witness against him, saying,
58 We heard him say, I will destroy this temple that is made with hands, and within three days I will build another made without hands.
59 But neither so did their witness agree together.
60 And the high priest stood up in the midst, and asked Jesus, saying, Answerest thou nothing? what is it which these witness against thee?
61 But he held his peace, and answered nothing. Again the high priest asked him, and said unto him, Art thou the Christ, the Son of the Blessed?
62 And Jesus said, I am: and ye shall see the Son of man sitting on the right hand of power, and coming in the clouds of heaven.
63 Then the high priest rent his clothes, and saith, What need we any further witnesses?
64 Ye have heard the blasphemy: what think ye? And they all condemned him to be guilty of death.
65 And some began to spit on him, and to cover his face, and to buffet him, and to say unto him, Prophesy: and the servants did strike him with the palms of their hands.
66 ¶ And as Peter was beneath in the palace, there cometh one of the maids of the high priest:
67 And when she saw Peter warming himself, she looked upon him, and said, And thou also wast with Jesus of Nazareth.
68 But he denied, saying, I know not, neither understand I what thou sayest. And he went out into the porch; and the cock crew.
69 And a maid saw him again, and began to say to them that stood by, This is one of them.
70 And he denied it again. And a little after, they that stood by said again to Peter, Surely thou art one of them: for thou art a Galilæan, and thy speech agreeth thereto.
71 But he began to curse and to swear, saying, I know not this man of whom ye speak.
72 And the second time the cock crew. And Peter called to mind the word that Jesus said unto him, Before the cock crow twice, thou shalt deny me thrice. And when he thought thereon, he wept.`,
"mark-15": `CHAPTER 15
Pilate decrees the death of Jesus—Jesus is mocked and crucified between two thieves—He dies and is buried in the tomb of Joseph of Arimathæa.
1 And straightway in the morning the chief priests held a consultation with the elders and scribes and the whole council, and bound Jesus, and carried him away, and delivered him to Pilate.
2 And Pilate asked him, Art thou the King of the Jews? And he answering said unto him, Thou sayest it.
3 And the chief priests accused him of many things: but he answered nothing.
4 And Pilate asked him again, saying, Answerest thou nothing? behold how many things they witness against thee.
5 But Jesus yet answered nothing; so that Pilate marvelled.
6 Now at that feast he released unto them one prisoner, whomsoever they desired.
7 And there was one named Barabbas, which lay bound with them that had made insurrection with him, who had committed murder in the insurrection.
8 And the multitude crying aloud began to desire him to do as he had ever done unto them.
9 But Pilate answered them, saying, Will ye that I release unto you the King of the Jews?
10 For he knew that the chief priests had delivered him for envy.
11 But the chief priests moved the people, that he should rather release Barabbas unto them.
12 And Pilate answered and said again unto them, What will ye then that I shall do unto him whom ye call the King of the Jews?
13 And they cried out again, Crucify him.
14 Then Pilate said unto them, Why, what evil hath he done? And they cried out the more exceedingly, Crucify him.
15 ¶ And so Pilate, willing to content the people, released Barabbas unto them, and delivered Jesus, when he had scourged him, to be crucified.
16 And the soldiers led him away into the hall, called Prætorium; and they call together the whole band.
17 And they clothed him with purple, and plaited a crown of thorns, and put it about his head,
18 And began to salute him, Hail, King of the Jews!
19 And they smote him on the head with a reed, and did spit upon him, and bowing their knees worshipped him.
20 And when they had mocked him, they took off the purple from him, and put his own clothes on him, and led him out to crucify him.
21 And they compel one Simon a Cyrenian, who passed by, coming out of the country, the father of Alexander and Rufus, to bear his cross.
22 And they bring him unto the place Golgotha, which is, being interpreted, The place of a skull.
23 And they gave him to drink wine mingled with myrrh: but he received it not.
24 And when they had crucified him, they parted his garments, casting lots upon them, what every man should take.
25 And it was the third hour, and they crucified him.
26 And the superscription of his accusation was written over, THE KING OF THE JEWS.
27 And with him they crucify two thieves; the one on his right hand, and the other on his left.
28 And the scripture was fulfilled, which saith, And he was numbered with the transgressors.
29 And they that passed by railed on him, wagging their heads, and saying, Ah, thou that destroyest the temple, and buildest it in three days,
30 Save thyself, and come down from the cross.
31 Likewise also the chief priests mocking said among themselves with the scribes, He saved others; himself he cannot save.
32 Let Christ the King of Israel descend now from the cross, that we may see and believe. And they that were crucified with him reviled him.
33 And when the sixth hour was come, there was darkness over the whole land until the ninth hour.
34 And at the ninth hour Jesus cried with a loud voice, saying, Eloi, Eloi, lama sabachthani? which is, being interpreted, My God, my God, why hast thou forsaken me?
35 And some of them that stood by, when they heard it, said, Behold, he calleth Elias.
36 And one ran and filled a sponge full of vinegar, and put it on a reed, and gave him to drink, saying, Let alone; let us see whether Elias will come to take him down.
37 And Jesus cried with a loud voice, and gave up the ghost.
38 And the veil of the temple was rent in twain from the top to the bottom.
39 ¶ And when the centurion, which stood over against him, saw that he so cried out, and gave up the ghost, he said, Truly this man was the Son of God.
40 There were also women looking on afar off: among whom was Mary Magdalene, and Mary the mother of James the less and of Joses, and Salome;
41 (Who also, when he was in Galilee, followed him, and ministered unto him;) and many other women which came up with him unto Jerusalem.
42 ¶ And now when the even was come, because it was the preparation, that is, the day before the sabbath,
43 Joseph of Arimathæa, an honourable counsellor, which also waited for the kingdom of God, came, and went in boldly unto Pilate, and craved the body of Jesus.
44 And Pilate marvelled if he were already dead: and calling unto him the centurion, he asked him whether he had been any while dead.
45 And when he knew it of the centurion, he gave the body to Joseph.
46 And he bought fine linen, and took him down, and wrapped him in the linen, and laid him in a sepulchre which was hewn out of a rock, and rolled a stone unto the door of the sepulchre.
47 And Mary Magdalene and Mary the mother of Joses beheld where he was laid.`,
"mark-16": `CHAPTER 16
Christ is risen—He appears to Mary Magdalene, then to others—He sends the Apostles to preach and promises that signs will follow faith—He ascends into heaven.
1 And when the sabbath was past, Mary Magdalene, and Mary the mother of James, and Salome, had bought sweet spices, that they might come and anoint him.
2 And very early in the morning the first day of the week, they came unto the sepulchre at the rising of the sun.
3 And they said among themselves, Who shall roll us away the stone from the door of the sepulchre?
4 And when they looked, they saw that the stone was rolled away: for it was very great.
5 And entering into the sepulchre, they saw a young man sitting on the right side, clothed in a long white garment; and they were affrighted.
6 And he saith unto them, Be not affrighted: Ye seek Jesus of Nazareth, which was crucified: he is risen; he is not here: behold the place where they laid him.
7 But go your way, tell his disciples and Peter that he goeth before you into Galilee: there shall ye see him, as he said unto you.
8 And they went out quickly, and fled from the sepulchre; for they trembled and were amazed: neither said they any thing to any man; for they were afraid.
9 ¶ Now when Jesus was risen early the first day of the week, he appeared first to Mary Magdalene, out of whom he had cast seven devils.
10 And she went and told them that had been with him, as they mourned and wept.
11 And they, when they had heard that he was alive, and had been seen of her, believed not.
12 ¶ After that he appeared in another form unto two of them, as they walked, and went into the country.
13 And they went and told it unto the residue: neither believed they them.
14 ¶ Afterward he appeared unto the eleven as they sat at meat, and upbraided them with their unbelief and hardness of heart, because they believed not them which had seen him after he was risen.
15 And he said unto them, Go ye into all the world, and preach the gospel to every creature.
16 He that believeth and is baptized shall be saved; but he that believeth not shall be damned.
17 And these signs shall follow them that believe; In my name shall they cast out devils; they shall speak with new tongues;
18 They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.
19 ¶ So then after the Lord had spoken unto them, he was received up into heaven, and sat on the right hand of God.
20 And they went forth, and preached every where, the Lord working with them, and confirming the word with signs following. Amen.`,

"luke-01": `THE GOSPEL ACCORDING TO
ST LUKE
CHAPTER 1
Gabriel promises Zacharias that Elisabeth will bear a son, whom they will name John—He also tells Mary that she will be the mother of the Son of God—Mary visits Elisabeth and utters a psalm of praise—John the Baptist is born—Zacharias prophesies of John’s mission.
1 Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us,
2 Even as they delivered them unto us, which from the beginning were eyewitnesses, and ministers of the word;
3 It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus,
4 That thou mightest know the certainty of those things, wherein thou hast been instructed.
5 ¶ There was in the days of Herod, the king of Judæa, a certain priest named Zacharias, of the course of Abia: and his wife was of the daughters of Aaron, and her name was Elisabeth.
6 And they were both righteous before God, walking in all the commandments and ordinances of the Lord blameless.
7 And they had no child, because that Elisabeth was barren, and they both were now well stricken in years.
8 And it came to pass, that while he executed the priest’s office before God in the order of his course,
9 According to the custom of the priest’s office, his lot was to burn incense when he went into the temple of the Lord.
10 And the whole multitude of the people were praying without at the time of incense.
11 And there appeared unto him an angel of the Lord standing on the right side of the altar of incense.
12 And when Zacharias saw him, he was troubled, and fear fell upon him.
13 But the angel said unto him, Fear not, Zacharias: for thy prayer is heard; and thy wife Elisabeth shall bear thee a son, and thou shalt call his name John.
14 And thou shalt have joy and gladness; and many shall rejoice at his birth.
15 For he shall be great in the sight of the Lord, and shall drink neither wine nor strong drink; and he shall be filled with the Holy Ghost, even from his mother’s womb.
16 And many of the children of Israel shall he turn to the Lord their God.
17 And he shall go before him in the spirit and power of Elias, to turn the hearts of the fathers to the children, and the disobedient to the wisdom of the just; to make ready a people prepared for the Lord.
18 And Zacharias said unto the angel, Whereby shall I know this? for I am an old man, and my wife well stricken in years.
19 And the angel answering said unto him, I am Gabriel, that stand in the presence of God; and am sent to speak unto thee, and to shew thee these glad tidings.
20 And, behold, thou shalt be dumb, and not able to speak, until the day that these things shall be performed, because thou believest not my words, which shall be fulfilled in their season.
21 And the people waited for Zacharias, and marvelled that he tarried so long in the temple.
22 And when he came out, he could not speak unto them: and they perceived that he had seen a vision in the temple: for he beckoned unto them, and remained speechless.
23 And it came to pass, that, as soon as the days of his ministration were accomplished, he departed to his own house.
24 And after those days his wife Elisabeth conceived, and hid herself five months, saying,
25 Thus hath the Lord dealt with me in the days wherein he looked on me, to take away my reproach among men.
26 And in the sixth month the angel Gabriel was sent from God unto a city of Galilee, named Nazareth,
27 To a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.
28 And the angel came in unto her, and said, Hail, thou that art highly favoured, the Lord is with thee: blessed art thou among women.
29 And when she saw him, she was troubled at his saying, and cast in her mind what manner of salutation this should be.
30 And the angel said unto her, Fear not, Mary: for thou hast found favour with God.
31 And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.
32 He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David:
33 And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.
34 Then said Mary unto the angel, How shall this be, seeing I know not a man?
35 And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.
36 And, behold, thy cousin Elisabeth, she hath also conceived a son in her old age: and this is the sixth month with her, who was called barren.
37 For with God nothing shall be impossible.
38 And Mary said, Behold the handmaid of the Lord; be it unto me according to thy word. And the angel departed from her.
39 And Mary arose in those days, and went into the hill country with haste, into a city of Juda;
40 And entered into the house of Zacharias, and saluted Elisabeth.
41 And it came to pass, that, when Elisabeth heard the salutation of Mary, the babe leaped in her womb; and Elisabeth was filled with the Holy Ghost:
42 And she spake out with a loud voice, and said, Blessed art thou among women, and blessed is the fruit of thy womb.
43 And whence is this to me, that the mother of my Lord should come to me?
44 For, lo, as soon as the voice of thy salutation sounded in mine ears, the babe leaped in my womb for joy.
45 And blessed is she that believed: for there shall be a performance of those things which were told her from the Lord.
46 And Mary said, My soul doth magnify the Lord,
47 And my spirit hath rejoiced in God my Saviour.
48 For he hath regarded the low estate of his handmaiden: for, behold, from henceforth all generations shall call me blessed.
49 For he that is mighty hath done to me great things; and holy is his name.
50 And his mercy is on them that fear him from generation to generation.
51 He hath shewed strength with his arm; he hath scattered the proud in the imagination of their hearts.
52 He hath put down the mighty from their seats, and exalted them of low degree.
53 He hath filled the hungry with good things; and the rich he hath sent empty away.
54 He hath holpen his servant Israel, in remembrance of his mercy;
55 As he spake to our fathers, to Abraham, and to his seed for ever.
56 And Mary abode with her about three months, and returned to her own house.
57 Now Elisabeth’s full time came that she should be delivered; and she brought forth a son.
58 And her neighbours and her cousins heard how the Lord had shewed great mercy upon her; and they rejoiced with her.
59 And it came to pass, that on the eighth day they came to circumcise the child; and they called him Zacharias, after the name of his father.
60 And his mother answered and said, Not so; but he shall be called John.
61 And they said unto her, There is none of thy kindred that is called by this name.
62 And they made signs to his father, how he would have him called.
63 And he asked for a writing table, and wrote, saying, His name is John. And they marvelled all.
64 And his mouth was opened immediately, and his tongue loosed, and he spake, and praised God.
65 And fear came on all that dwelt round about them: and all these sayings were noised abroad throughout all the hill country of Judæa.
66 And all they that heard them laid them up in their hearts, saying, What manner of child shall this be! And the hand of the Lord was with him.
67 And his father Zacharias was filled with the Holy Ghost, and prophesied, saying,
68 Blessed be the Lord God of Israel; for he hath visited and redeemed his people,
69 And hath raised up an horn of salvation for us in the house of his servant David;
70 As he spake by the mouth of his holy prophets, which have been since the world began:
71 That we should be saved from our enemies, and from the hand of all that hate us;
72 To perform the mercy promised to our fathers, and to remember his holy covenant;
73 The oath which he sware to our father Abraham,
74 That he would grant unto us, that we being delivered out of the hand of our enemies might serve him without fear,
75 In holiness and righteousness before him, all the days of our life.
76 And thou, child, shalt be called the prophet of the Highest: for thou shalt go before the face of the Lord to prepare his ways;
77 To give knowledge of salvation unto his people by the remission of their sins,
78 Through the tender mercy of our God; whereby the dayspring from on high hath visited us,
79 To give light to them that sit in darkness and in the shadow of death, to guide our feet into the way of peace.
80 And the child grew, and waxed strong in spirit, and was in the deserts till the day of his shewing unto Israel.`,
"luke-02": `CHAPTER 2
Heavenly messengers herald the birth of Jesus in Bethlehem—He is circumcised, and Simeon and Anna prophesy of His mission—At twelve years of age, He goes about His Father’s business.
1 And it came to pass in those days, that there went out a decree from Cæsar Augustus, that all the world should be taxed.
2 (And this taxing was first made when Cyrenius was governor of Syria.)
3 And all went to be taxed, every one into his own city.
4 And Joseph also went up from Galilee, out of the city of Nazareth, into Judæa, unto the city of David, which is called Bethlehem; (because he was of the house and lineage of David:)
5 To be taxed with Mary his espoused wife, being great with child.
6 And so it was, that, while they were there, the days were accomplished that she should be delivered.
7 And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.
8 And there were in the same country shepherds abiding in the field, keeping watch over their flock by night.
9 And, lo, the angel of the Lord came upon them, and the glory of the Lord shone round about them: and they were sore afraid.
10 And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.
11 For unto you is born this day in the city of David a Saviour, which is Christ the Lord.
12 And this shall be a sign unto you; Ye shall find the babe wrapped in swaddling clothes, lying in a manger.
13 And suddenly there was with the angel a multitude of the heavenly host praising God, and saying,
14 Glory to God in the highest, and on earth peace, good will toward men.
15 And it came to pass, as the angels were gone away from them into heaven, the shepherds said one to another, Let us now go even unto Bethlehem, and see this thing which is come to pass, which the Lord hath made known unto us.
16 And they came with haste, and found Mary, and Joseph, and the babe lying in a manger.
17 And when they had seen it, they made known abroad the saying which was told them concerning this child.
18 And all they that heard it wondered at those things which were told them by the shepherds.
19 But Mary kept all these things, and pondered them in her heart.
20 And the shepherds returned, glorifying and praising God for all the things that they had heard and seen, as it was told unto them.
21 And when eight days were accomplished for the circumcising of the child, his name was called JESUS, which was so named of the angel before he was conceived in the womb.
22 And when the days of her purification according to the law of Moses were accomplished, they brought him to Jerusalem, to present him to the Lord;
23 (As it is written in the law of the Lord, Every male that openeth the womb shall be called holy to the Lord;)
24 And to offer a sacrifice according to that which is said in the law of the Lord, A pair of turtledoves, or two young pigeons.
25 And, behold, there was a man in Jerusalem, whose name was Simeon; and the same man was just and devout, waiting for the consolation of Israel: and the Holy Ghost was upon him.
26 And it was revealed unto him by the Holy Ghost, that he should not see death, before he had seen the Lord’s Christ.
27 And he came by the Spirit into the temple: and when the parents brought in the child Jesus, to do for him after the custom of the law,
28 Then took he him up in his arms, and blessed God, and said,
29 Lord, now lettest thou thy servant depart in peace, according to thy word:
30 For mine eyes have seen thy salvation,
31 Which thou hast prepared before the face of all people;
32 A light to lighten the Gentiles, and the glory of thy people Israel.
33 And Joseph and his mother marvelled at those things which were spoken of him.
34 And Simeon blessed them, and said unto Mary his mother, Behold, this child is set for the fall and rising again of many in Israel; and for a sign which shall be spoken against;
35 (Yea, a sword shall pierce through thy own soul also,) that the thoughts of many hearts may be revealed.
36 And there was one Anna, a prophetess, the daughter of Phanuel, of the tribe of Aser: she was of a great age, and had lived with an husband seven years from her virginity;
37 And she was a widow of about fourscore and four years, which departed not from the temple, but served God with fastings and prayers night and day.
38 And she coming in that instant gave thanks likewise unto the Lord, and spake of him to all them that looked for redemption in Jerusalem.
39 And when they had performed all things according to the law of the Lord, they returned into Galilee, to their own city Nazareth.
40 And the child grew, and waxed strong in spirit, filled with wisdom: and the grace of God was upon him.
41 Now his parents went to Jerusalem every year at the feast of the passover.
42 And when he was twelve years old, they went up to Jerusalem after the custom of the feast.
43 And when they had fulfilled the days, as they returned, the child Jesus tarried behind in Jerusalem; and Joseph and his mother knew not of it.
44 But they, supposing him to have been in the company, went a day’s journey; and they sought him among their kinsfolk and acquaintance.
45 And when they found him not, they turned back again to Jerusalem, seeking him.
46 And it came to pass, that after three days they found him in the temple, sitting in the midst of the doctors, both hearing them, and asking them questions.
47 And all that heard him were astonished at his understanding and answers.
48 And when they saw him, they were amazed: and his mother said unto him, Son, why hast thou thus dealt with us? behold, thy father and I have sought thee sorrowing.
49 And he said unto them, How is it that ye sought me? wist ye not that I must be about my Father’s business?
50 And they understood not the saying which he spake unto them.
51 And he went down with them, and came to Nazareth, and was subject unto them: but his mother kept all these sayings in her heart.
52 And Jesus increased in wisdom and stature, and in favour with God and man.`,
"luke-03": `CHAPTER 3
John the Baptist preaches and baptizes—Jesus is baptized, and God acclaims Him as His Son—Jesus’ genealogy back to Adam is given.
1 Now in the fifteenth year of the reign of Tiberius Cæsar, Pontius Pilate being governor of Judæa, and Herod being tetrarch of Galilee, and his brother Philip tetrarch of Ituræa and of the region of Trachonitis, and Lysanias the tetrarch of Abilene,
2 Annas and Caiaphas being the high priests, the word of God came unto John the son of Zacharias in the wilderness.
3 And he came into all the country about Jordan, preaching the baptism of repentance for the remission of sins;
4 As it is written in the book of the words of Esaias the prophet, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.
5 Every valley shall be filled, and every mountain and hill shall be brought low; and the crooked shall be made straight, and the rough ways shall be made smooth;
6 And all flesh shall see the salvation of God.
7 Then said he to the multitude that came forth to be baptized of him, O generation of vipers, who hath warned you to flee from the wrath to come?
8 Bring forth therefore fruits worthy of repentance, and begin not to say within yourselves, We have Abraham to our father: for I say unto you, That God is able of these stones to raise up children unto Abraham.
9 And now also the axe is laid unto the root of the trees: every tree therefore which bringeth not forth good fruit is hewn down, and cast into the fire.
10 And the people asked him, saying, What shall we do then?
11 He answereth and saith unto them, He that hath two coats, let him impart to him that hath none; and he that hath meat, let him do likewise.
12 Then came also publicans to be baptized, and said unto him, Master, what shall we do?
13 And he said unto them, Exact no more than that which is appointed you.
14 And the soldiers likewise demanded of him, saying, And what shall we do? And he said unto them, Do violence to no man, neither accuse any falsely; and be content with your wages.
15 And as the people were in expectation, and all men mused in their hearts of John, whether he were the Christ, or not;
16 John answered, saying unto them all, I indeed baptize you with water; but one mightier than I cometh, the latchet of whose shoes I am not worthy to unloose: he shall baptize you with the Holy Ghost and with fire:
17 Whose fan is in his hand, and he will throughly purge his floor, and will gather the wheat into his garner; but the chaff he will burn with fire unquenchable.
18 And many other things in his exhortation preached he unto the people.
19 But Herod the tetrarch, being reproved by him for Herodias his brother Philip’s wife, and for all the evils which Herod had done,
20 Added yet this above all, that he shut up John in prison.
21 Now when all the people were baptized, it came to pass, that Jesus also being baptized, and praying, the heaven was opened,
22 And the Holy Ghost descended in a bodily shape like a dove upon him, and a voice came from heaven, which said, Thou art my beloved Son; in thee I am well pleased.
23 And Jesus himself began to be about thirty years of age, being (as was supposed) the son of Joseph, which was the son of Heli,
24 Which was the son of Matthat, which was the son of Levi, which was the son of Melchi, which was the son of Janna, which was the son of Joseph,
25 Which was the son of Mattathias, which was the son of Amos, which was the son of Naum, which was the son of Esli, which was the son of Nagge,
26 Which was the son of Maath, which was the son of Mattathias, which was the son of Semei, which was the son of Joseph, which was the son of Juda,
27 Which was the son of Joanna, which was the son of Rhesa, which was the son of Zorobabel, which was the son of Salathiel, which was the son of Neri,
28 Which was the son of Melchi, which was the son of Addi, which was the son of Cosam, which was the son of Elmodam, which was the son of Er,
29 Which was the son of Jose, which was the son of Eliezer, which was the son of Jorim, which was the son of Matthat, which was the son of Levi,
30 Which was the son of Simeon, which was the son of Juda, which was the son of Joseph, which was the son of Jonan, which was the son of Eliakim,
31 Which was the son of Melea, which was the son of Menan, which was the son of Mattatha, which was the son of Nathan, which was the son of David,
32 Which was the son of Jesse, which was the son of Obed, which was the son of Booz, which was the son of Salmon, which was the son of Naasson,
33 Which was the son of Aminadab, which was the son of Aram, which was the son of Esrom, which was the son of Phares, which was the son of Juda,
34 Which was the son of Jacob, which was the son of Isaac, which was the son of Abraham, which was the son of Thara, which was the son of Nachor,
35 Which was the son of Saruch, which was the son of Ragau, which was the son of Phalec, which was the son of Heber, which was the son of Sala,
36 Which was the son of Cainan, which was the son of Arphaxad, which was the son of Sem, which was the son of Noe, which was the son of Lamech,
37 Which was the son of Mathusala, which was the son of Enoch, which was the son of Jared, which was the son of Maleleel, which was the son of Cainan,
38 Which was the son of Enos, which was the son of Seth, which was the son of Adam, which was the son of God.`,
"luke-04": `CHAPTER 4
Jesus fasts forty days and is tempted by the devil—Jesus announces His divine sonship in Nazareth and is rejected—He casts out a devil in Capernaum, heals Peter’s mother-in-law, and preaches and heals throughout Galilee.
1 And Jesus being full of the Holy Ghost returned from Jordan, and was led by the Spirit into the wilderness,
2 Being forty days tempted of the devil. And in those days he did eat nothing: and when they were ended, he afterward hungered.
3 And the devil said unto him, If thou be the Son of God, command this stone that it be made bread.
4 And Jesus answered him, saying, It is written, That man shall not live by bread alone, but by every word of God.
5 And the devil, taking him up into an high mountain, shewed unto him all the kingdoms of the world in a moment of time.
6 And the devil said unto him, All this power will I give thee, and the glory of them: for that is delivered unto me; and to whomsoever I will I give it.
7 If thou therefore wilt worship me, all shall be thine.
8 And Jesus answered and said unto him, Get thee behind me, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.
9 And he brought him to Jerusalem, and set him on a pinnacle of the temple, and said unto him, If thou be the Son of God, cast thyself down from hence:
10 For it is written, He shall give his angels charge over thee, to keep thee:
11 And in their hands they shall bear thee up, lest at any time thou dash thy foot against a stone.
12 And Jesus answering said unto him, It is said, Thou shalt not tempt the Lord thy God.
13 And when the devil had ended all the temptation, he departed from him for a season.
14 ¶ And Jesus returned in the power of the Spirit into Galilee: and there went out a fame of him through all the region round about.
15 And he taught in their synagogues, being glorified of all.
16 ¶ And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.
17 And there was delivered unto him the book of the prophet Esaias. And when he had opened the book, he found the place where it was written,
18 The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised,
19 To preach the acceptable year of the Lord.
20 And he closed the book, and he gave it again to the minister, and sat down. And the eyes of all them that were in the synagogue were fastened on him.
21 And he began to say unto them, This day is this scripture fulfilled in your ears.
22 And all bare him witness, and wondered at the gracious words which proceeded out of his mouth. And they said, Is not this Joseph’s son?
23 And he said unto them, Ye will surely say unto me this proverb, Physician, heal thyself: whatsoever we have heard done in Capernaum, do also here in thy country.
24 And he said, Verily I say unto you, No prophet is accepted in his own country.
25 But I tell you of a truth, many widows were in Israel in the days of Elias, when the heaven was shut up three years and six months, when great famine was throughout all the land;
26 But unto none of them was Elias sent, save unto Sarepta, a city of Sidon, unto a woman that was a widow.
27 And many lepers were in Israel in the time of Eliseus the prophet; and none of them was cleansed, saving Naaman the Syrian.
28 And all they in the synagogue, when they heard these things, were filled with wrath,
29 And rose up, and thrust him out of the city, and led him unto the brow of the hill whereon their city was built, that they might cast him down headlong.
30 But he passing through the midst of them went his way,
31 And came down to Capernaum, a city of Galilee, and taught them on the sabbath days.
32 And they were astonished at his doctrine: for his word was with power.
33 ¶ And in the synagogue there was a man, which had a spirit of an unclean devil, and cried out with a loud voice,
34 Saying, Let us alone; what have we to do with thee, thou Jesus of Nazareth? art thou come to destroy us? I know thee who thou art; the Holy One of God.
35 And Jesus rebuked him, saying, Hold thy peace, and come out of him. And when the devil had thrown him in the midst, he came out of him, and hurt him not.
36 And they were all amazed, and spake among themselves, saying, What a word is this! for with authority and power he commandeth the unclean spirits, and they come out.
37 And the fame of him went out into every place of the country round about.
38 ¶ And he arose out of the synagogue, and entered into Simon’s house. And Simon’s wife’s mother was taken with a great fever; and they besought him for her.
39 And he stood over her, and rebuked the fever; and it left her: and immediately she arose and ministered unto them.
40 ¶ Now when the sun was setting, all they that had any sick with divers diseases brought them unto him; and he laid his hands on every one of them, and healed them.
41 And devils also came out of many, crying out, and saying, Thou art Christ the Son of God. And he rebuking them suffered them not to speak: for they knew that he was Christ.
42 And when it was day, he departed and went into a desert place: and the people sought him, and came unto him, and stayed him, that he should not depart from them.
43 And he said unto them, I must preach the kingdom of God to other cities also: for therefore am I sent.
44 And he preached in the synagogues of Galilee.`,
"luke-05": `CHAPTER 5
Peter, the fisherman, is called to catch men—Jesus heals a leper—He forgives sins and heals a paralytic—Matthew is called—The sick need a physician—New wine must be put in new bottles.
1 And it came to pass, that, as the people pressed upon him to hear the word of God, he stood by the lake of Gennesaret,
2 And saw two ships standing by the lake: but the fishermen were gone out of them, and were washing their nets.
3 And he entered into one of the ships, which was Simon’s, and prayed him that he would thrust out a little from the land. And he sat down, and taught the people out of the ship.
4 Now when he had left speaking, he said unto Simon, Launch out into the deep, and let down your nets for a draught.
5 And Simon answering said unto him, Master, we have toiled all the night, and have taken nothing: nevertheless at thy word I will let down the net.
6 And when they had this done, they inclosed a great multitude of fishes: and their net brake.
7 And they beckoned unto their partners, which were in the other ship, that they should come and help them. And they came, and filled both the ships, so that they began to sink.
8 When Simon Peter saw it, he fell down at Jesus’ knees, saying, Depart from me; for I am a sinful man, O Lord.
9 For he was astonished, and all that were with him, at the draught of the fishes which they had taken:
10 And so was also James, and John, the sons of Zebedee, which were partners with Simon. And Jesus said unto Simon, Fear not; from henceforth thou shalt catch men.
11 And when they had brought their ships to land, they forsook all, and followed him.
12 ¶ And it came to pass, when he was in a certain city, behold a man full of leprosy: who seeing Jesus fell on his face, and besought him, saying, Lord, if thou wilt, thou canst make me clean.
13 And he put forth his hand, and touched him, saying, I will: be thou clean. And immediately the leprosy departed from him.
14 And he charged him to tell no man: but go, and shew thyself to the priest, and offer for thy cleansing, according as Moses commanded, for a testimony unto them.
15 But so much the more went there a fame abroad of him: and great multitudes came together to hear, and to be healed by him of their infirmities.
16 ¶ And he withdrew himself into the wilderness, and prayed.
17 And it came to pass on a certain day, as he was teaching, that there were Pharisees and doctors of the law sitting by, which were come out of every town of Galilee, and Judæa, and Jerusalem: and the power of the Lord was present to heal them.
18 ¶ And, behold, men brought in a bed a man which was taken with a palsy: and they sought means to bring him in, and to lay him before him.
19 And when they could not find by what way they might bring him in because of the multitude, they went upon the housetop, and let him down through the tiling with his couch into the midst before Jesus.
20 And when he saw their faith, he said unto him, Man, thy sins are forgiven thee.
21 And the scribes and the Pharisees began to reason, saying, Who is this which speaketh blasphemies? Who can forgive sins, but God alone?
22 But when Jesus perceived their thoughts, he answering said unto them, What reason ye in your hearts?
23 Whether is easier, to say, Thy sins be forgiven thee; or to say, Rise up and walk?
24 But that ye may know that the Son of man hath power upon earth to forgive sins, (he said unto the sick of the palsy,) I say unto thee, Arise, and take up thy couch, and go into thine house.
25 And immediately he rose up before them, and took up that whereon he lay, and departed to his own house, glorifying God.
26 And they were all amazed, and they glorified God, and were filled with fear, saying, We have seen strange things to day.
27 ¶ And after these things he went forth, and saw a publican, named Levi, sitting at the receipt of custom: and he said unto him, Follow me.
28 And he left all, rose up, and followed him.
29 And Levi made him a great feast in his own house: and there was a great company of publicans and of others that sat down with them.
30 But their scribes and Pharisees murmured against his disciples, saying, Why do ye eat and drink with publicans and sinners?
31 And Jesus answering said unto them, They that are whole need not a physician; but they that are sick.
32 I came not to call the righteous, but sinners to repentance.
33 ¶ And they said unto him, Why do the disciples of John fast often, and make prayers, and likewise the disciples of the Pharisees; but thine eat and drink?
34 And he said unto them, Can ye make the children of the bridechamber fast, while the bridegroom is with them?
35 But the days will come, when the bridegroom shall be taken away from them, and then shall they fast in those days.
36 ¶ And he spake also a parable unto them; No man putteth a piece of a new garment upon an old; if otherwise, then both the new maketh a rent, and the piece that was taken out of the new agreeth not with the old.
37 And no man putteth new wine into old bottles; else the new wine will burst the bottles, and be spilled, and the bottles shall perish.
38 But new wine must be put into new bottles; and both are preserved.
39 No man also having drunk old wine straightway desireth new: for he saith, The old is better.`,
"luke-06": `CHAPTER 6
Jesus heals on the Sabbath—He chooses the Twelve Apostles—He pronounces blessings upon the obedient and woes upon the wicked.
1 And it came to pass on the second sabbath after the first, that he went through the corn fields; and his disciples plucked the ears of corn, and did eat, rubbing them in their hands.
2 And certain of the Pharisees said unto them, Why do ye that which is not lawful to do on the sabbath days?
3 And Jesus answering them said, Have ye not read so much as this, what David did, when himself was an hungred, and they which were with him;
4 How he went into the house of God, and did take and eat the shewbread, and gave also to them that were with him; which it is not lawful to eat but for the priests alone?
5 And he said unto them, That the Son of man is Lord also of the sabbath.
6 And it came to pass also on another sabbath, that he entered into the synagogue and taught: and there was a man whose right hand was withered.
7 And the scribes and Pharisees watched him, whether he would heal on the sabbath day; that they might find an accusation against him.
8 But he knew their thoughts, and said to the man which had the withered hand, Rise up, and stand forth in the midst. And he arose and stood forth.
9 Then said Jesus unto them, I will ask you one thing; Is it lawful on the sabbath days to do good, or to do evil? to save life, or to destroy it?
10 And looking round about upon them all, he said unto the man, Stretch forth thy hand. And he did so: and his hand was restored whole as the other.
11 And they were filled with madness; and communed one with another what they might do to Jesus.
12 And it came to pass in those days, that he went out into a mountain to pray, and continued all night in prayer to God.
13 ¶ And when it was day, he called unto him his disciples: and of them he chose twelve, whom also he named apostles;
14 Simon, (whom he also named Peter,) and Andrew his brother, James and John, Philip and Bartholomew,
15 Matthew and Thomas, James the son of Alphæus, and Simon called Zelotes,
16 And Judas the brother of James, and Judas Iscariot, which also was the traitor.
17 ¶ And he came down with them, and stood in the plain, and the company of his disciples, and a great multitude of people out of all Judæa and Jerusalem, and from the sea coast of Tyre and Sidon, which came to hear him, and to be healed of their diseases;
18 And they that were vexed with unclean spirits: and they were healed.
19 And the whole multitude sought to touch him: for there went virtue out of him, and healed them all.
20 ¶ And he lifted up his eyes on his disciples, and said, Blessed be ye poor: for yours is the kingdom of God.
21 Blessed are ye that hunger now: for ye shall be filled. Blessed are ye that weep now: for ye shall laugh.
22 Blessed are ye, when men shall hate you, and when they shall separate you from their company, and shall reproach you, and cast out your name as evil, for the Son of man’s sake.
23 Rejoice ye in that day, and leap for joy: for, behold, your reward is great in heaven: for in the like manner did their fathers unto the prophets.
24 But woe unto you that are rich! for ye have received your consolation.
25 Woe unto you that are full! for ye shall hunger. Woe unto you that laugh now! for ye shall mourn and weep.
26 Woe unto you, when all men shall speak well of you! for so did their fathers to the false prophets.
27 ¶ But I say unto you which hear, Love your enemies, do good to them which hate you,
28 Bless them that curse you, and pray for them which despitefully use you.
29 And unto him that smiteth thee on the one cheek offer also the other; and him that taketh away thy cloak forbid not to take thy coat also.
30 Give to every man that asketh of thee; and of him that taketh away thy goods ask them not again.
31 And as ye would that men should do to you, do ye also to them likewise.
32 For if ye love them which love you, what thank have ye? for sinners also love those that love them.
33 And if ye do good to them which do good to you, what thank have ye? for sinners also do even the same.
34 And if ye lend to them of whom ye hope to receive, what thank have ye? for sinners also lend to sinners, to receive as much again.
35 But love ye your enemies, and do good, and lend, hoping for nothing again; and your reward shall be great, and ye shall be the children of the Highest: for he is kind unto the unthankful and to the evil.
36 Be ye therefore merciful, as your Father also is merciful.
37 Judge not, and ye shall not be judged: condemn not, and ye shall not be condemned: forgive, and ye shall be forgiven:
38 Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.
39 And he spake a parable unto them, Can the blind lead the blind? shall they not both fall into the ditch?
40 The disciple is not above his master: but every one that is perfect shall be as his master.
41 And why beholdest thou the mote that is in thy brother’s eye, but perceivest not the beam that is in thine own eye?
42 Either how canst thou say to thy brother, Brother, let me pull out the mote that is in thine eye, when thou thyself beholdest not the beam that is in thine own eye? Thou hypocrite, cast out first the beam out of thine own eye, and then shalt thou see clearly to pull out the mote that is in thy brother’s eye.
43 For a good tree bringeth not forth corrupt fruit; neither doth a corrupt tree bring forth good fruit.
44 For every tree is known by his own fruit. For of thorns men do not gather figs, nor of a bramble bush gather they grapes.
45 A good man out of the good treasure of his heart bringeth forth that which is good; and an evil man out of the evil treasure of his heart bringeth forth that which is evil: for of the abundance of the heart his mouth speaketh.
46 ¶ And why call ye me, Lord, Lord, and do not the things which I say?
47 Whosoever cometh to me, and heareth my sayings, and doeth them, I will shew you to whom he is like:
48 He is like a man which built an house, and digged deep, and laid the foundation on a rock: and when the flood arose, the stream beat vehemently upon that house, and could not shake it: for it was founded upon a rock.
49 But he that heareth, and doeth not, is like a man that without a foundation built an house upon the earth; against which the stream did beat vehemently, and immediately it fell; and the ruin of that house was great.`,
"luke-07": `CHAPTER 7
Jesus heals the centurion’s servant—Jesus raises from death the son of the widow of Nain—He praises John the Baptist as more than a prophet—A woman anoints Jesus’ feet, and He forgives her sins.
1 Now when he had ended all his sayings in the audience of the people, he entered into Capernaum.
2 And a certain centurion’s servant, who was dear unto him, was sick, and ready to die.
3 And when he heard of Jesus, he sent unto him the elders of the Jews, beseeching him that he would come and heal his servant.
4 And when they came to Jesus, they besought him instantly, saying, That he was worthy for whom he should do this:
5 For he loveth our nation, and he hath built us a synagogue.
6 Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof:
7 Wherefore neither thought I myself worthy to come unto thee: but say in a word, and my servant shall be healed.
8 For I also am a man set under authority, having under me soldiers, and I say unto one, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it.
9 When Jesus heard these things, he marvelled at him, and turned him about, and said unto the people that followed him, I say unto you, I have not found so great faith, no, not in Israel.
10 And they that were sent, returning to the house, found the servant whole that had been sick.
11 ¶ And it came to pass the day after, that he went into a city called Nain; and many of his disciples went with him, and much people.
12 Now when he came nigh to the gate of the city, behold, there was a dead man carried out, the only son of his mother, and she was a widow: and much people of the city was with her.
13 And when the Lord saw her, he had compassion on her, and said unto her, Weep not.
14 And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise.
15 And he that was dead sat up, and began to speak. And he delivered him to his mother.
16 And there came a fear on all: and they glorified God, saying, That a great prophet is risen up among us; and, That God hath visited his people.
17 And this rumour of him went forth throughout all Judæa, and throughout all the region round about.
18 And the disciples of John shewed him of all these things.
19 ¶ And John calling unto him two of his disciples sent them to Jesus, saying, Art thou he that should come? or look we for another?
20 When the men were come unto him, they said, John Baptist hath sent us unto thee, saying, Art thou he that should come? or look we for another?
21 And in that same hour he cured many of their infirmities and plagues, and of evil spirits; and unto many that were blind he gave sight.
22 Then Jesus answering said unto them, Go your way, and tell John what things ye have seen and heard; how that the blind see, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised, to the poor the gospel is preached.
23 And blessed is he, whosoever shall not be offended in me.
24 ¶ And when the messengers of John were departed, he began to speak unto the people concerning John, What went ye out into the wilderness for to see? A reed shaken with the wind?
25 But what went ye out for to see? A man clothed in soft raiment? Behold, they which are gorgeously apparelled, and live delicately, are in kings’ courts.
26 But what went ye out for to see? A prophet? Yea, I say unto you, and much more than a prophet.
27 This is he, of whom it is written, Behold, I send my messenger before thy face, which shall prepare thy way before thee.
28 For I say unto you, Among those that are born of women there is not a greater prophet than John the Baptist: but he that is least in the kingdom of God is greater than he.
29 And all the people that heard him, and the publicans, justified God, being baptized with the baptism of John.
30 But the Pharisees and lawyers rejected the counsel of God against themselves, being not baptized of him.
31 ¶ And the Lord said, Whereunto then shall I liken the men of this generation? and to what are they like?
32 They are like unto children sitting in the marketplace, and calling one to another, and saying, We have piped unto you, and ye have not danced; we have mourned to you, and ye have not wept.
33 For John the Baptist came neither eating bread nor drinking wine; and ye say, He hath a devil.
34 The Son of man is come eating and drinking; and ye say, Behold a gluttonous man, and a winebibber, a friend of publicans and sinners!
35 But wisdom is justified of all her children.
36 ¶ And one of the Pharisees desired him that he would eat with him. And he went into the Pharisee’s house, and sat down to meat.
37 And, behold, a woman in the city, which was a sinner, when she knew that Jesus sat at meat in the Pharisee’s house, brought an alabaster box of ointment,
38 And stood at his feet behind him weeping, and began to wash his feet with tears, and did wipe them with the hairs of her head, and kissed his feet, and anointed them with the ointment.
39 Now when the Pharisee which had bidden him saw it, he spake within himself, saying, This man, if he were a prophet, would have known who and what manner of woman this is that toucheth him: for she is a sinner.
40 And Jesus answering said unto him, Simon, I have somewhat to say unto thee. And he saith, Master, say on.
41 There was a certain creditor which had two debtors: the one owed five hundred pence, and the other fifty.
42 And when they had nothing to pay, he frankly forgave them both. Tell me therefore, which of them will love him most?
43 Simon answered and said, I suppose that he, to whom he forgave most. And he said unto him, Thou hast rightly judged.
44 And he turned to the woman, and said unto Simon, Seest thou this woman? I entered into thine house, thou gavest me no water for my feet: but she hath washed my feet with tears, and wiped them with the hairs of her head.
45 Thou gavest me no kiss: but this woman since the time I came in hath not ceased to kiss my feet.
46 My head with oil thou didst not anoint: but this woman hath anointed my feet with ointment.
47 Wherefore I say unto thee, Her sins, which are many, are forgiven; for she loved much: but to whom little is forgiven, the same loveth little.
48 And he said unto her, Thy sins are forgiven.
49 And they that sat at meat with him began to say within themselves, Who is this that forgiveth sins also?
50 And he said to the woman, Thy faith hath saved thee; go in peace.`,
"luke-08": `CHAPTER 8
Jesus gives and interprets the parable of the sower—He stills the tempest; casts out a legion of devils, who then enter the swine; heals a woman of an issue of blood; and raises Jairus’s daughter from death.
1 And it came to pass afterward, that he went throughout every city and village, preaching and shewing the glad tidings of the kingdom of God: and the twelve were with him,
2 And certain women, which had been healed of evil spirits and infirmities, Mary called Magdalene, out of whom went seven devils,
3 And Joanna the wife of Chuza Herod’s steward, and Susanna, and many others, which ministered unto him of their substance.
4 ¶ And when much people were gathered together, and were come to him out of every city, he spake by a parable:
5 A sower went out to sow his seed: and as he sowed, some fell by the way side; and it was trodden down, and the fowls of the air devoured it.
6 And some fell upon a rock; and as soon as it was sprung up, it withered away, because it lacked moisture.
7 And some fell among thorns; and the thorns sprang up with it, and choked it.
8 And other fell on good ground, and sprang up, and bare fruit an hundredfold. And when he had said these things, he cried, He that hath ears to hear, let him hear.
9 And his disciples asked him, saying, What might this parable be?
10 And he said, Unto you it is given to know the mysteries of the kingdom of God: but to others in parables; that seeing they might not see, and hearing they might not understand.
11 Now the parable is this: The seed is the word of God.
12 Those by the way side are they that hear; then cometh the devil, and taketh away the word out of their hearts, lest they should believe and be saved.
13 They on the rock are they, which, when they hear, receive the word with joy; and these have no root, which for a while believe, and in time of temptation fall away.
14 And that which fell among thorns are they, which, when they have heard, go forth, and are choked with cares and riches and pleasures of this life, and bring no fruit to perfection.
15 But that on the good ground are they, which in an honest and good heart, having heard the word, keep it, and bring forth fruit with patience.
16 ¶ No man, when he hath lighted a candle, covereth it with a vessel, or putteth it under a bed; but setteth it on a candlestick, that they which enter in may see the light.
17 For nothing is secret, that shall not be made manifest; neither any thing hid, that shall not be known and come abroad.
18 Take heed therefore how ye hear: for whosoever hath, to him shall be given; and whosoever hath not, from him shall be taken even that which he seemeth to have.
19 ¶ Then came to him his mother and his brethren, and could not come at him for the press.
20 And it was told him by certain which said, Thy mother and thy brethren stand without, desiring to see thee.
21 And he answered and said unto them, My mother and my brethren are these which hear the word of God, and do it.
22 ¶ Now it came to pass on a certain day, that he went into a ship with his disciples: and he said unto them, Let us go over unto the other side of the lake. And they launched forth.
23 But as they sailed he fell asleep: and there came down a storm of wind on the lake; and they were filled with water, and were in jeopardy.
24 And they came to him, and awoke him, saying, Master, master, we perish. Then he arose, and rebuked the wind and the raging of the water: and they ceased, and there was a calm.
25 And he said unto them, Where is your faith? And they being afraid wondered, saying one to another, What manner of man is this! for he commandeth even the winds and water, and they obey him.
26 ¶ And they arrived at the country of the Gadarenes, which is over against Galilee.
27 And when he went forth to land, there met him out of the city a certain man, which had devils long time, and ware no clothes, neither abode in any house, but in the tombs.
28 When he saw Jesus, he cried out, and fell down before him, and with a loud voice said, What have I to do with thee, Jesus, thou Son of God most high? I beseech thee, torment me not.
29 (For he had commanded the unclean spirit to come out of the man. For oftentimes it had caught him: and he was kept bound with chains and in fetters; and he brake the bands, and was driven of the devil into the wilderness.)
30 And Jesus asked him, saying, What is thy name? And he said, Legion: because many devils were entered into him.
31 And they besought him that he would not command them to go out into the deep.
32 And there was there an herd of many swine feeding on the mountain: and they besought him that he would suffer them to enter into them. And he suffered them.
33 Then went the devils out of the man, and entered into the swine: and the herd ran violently down a steep place into the lake, and were choked.
34 When they that fed them saw what was done, they fled, and went and told it in the city and in the country.
35 Then they went out to see what was done; and came to Jesus, and found the man, out of whom the devils were departed, sitting at the feet of Jesus, clothed, and in his right mind: and they were afraid.
36 They also which saw it told them by what means he that was possessed of the devils was healed.
37 ¶ Then the whole multitude of the country of the Gadarenes round about besought him to depart from them; for they were taken with great fear: and he went up into the ship, and returned back again.
38 Now the man out of whom the devils were departed besought him that he might be with him: but Jesus sent him away, saying,
39 Return to thine own house, and shew how great things God hath done unto thee. And he went his way, and published throughout the whole city how great things Jesus had done unto him.
40 And it came to pass, that, when Jesus was returned, the people gladly received him: for they were all waiting for him.
41 ¶ And, behold, there came a man named Jairus, and he was a ruler of the synagogue: and he fell down at Jesus’ feet, and besought him that he would come into his house:
42 For he had one only daughter, about twelve years of age, and she lay a dying. But as he went the people thronged him.
43 ¶ And a woman having an issue of blood twelve years, which had spent all her living upon physicians, neither could be healed of any,
44 Came behind him, and touched the border of his garment: and immediately her issue of blood stanched.
45 And Jesus said, Who touched me? When all denied, Peter and they that were with him said, Master, the multitude throng thee and press thee, and sayest thou, Who touched me?
46 And Jesus said, Somebody hath touched me: for I perceive that virtue is gone out of me.
47 And when the woman saw that she was not hid, she came trembling, and falling down before him, she declared unto him before all the people for what cause she had touched him, and how she was healed immediately.
48 And he said unto her, Daughter, be of good comfort: thy faith hath made thee whole; go in peace.
49 ¶ While he yet spake, there cometh one from the ruler of the synagogue’s house, saying to him, Thy daughter is dead; trouble not the Master.
50 But when Jesus heard it, he answered him, saying, Fear not: believe only, and she shall be made whole.
51 And when he came into the house, he suffered no man to go in, save Peter, and James, and John, and the father and the mother of the maiden.
52 And all wept, and bewailed her: but he said, Weep not; she is not dead, but sleepeth.
53 And they laughed him to scorn, knowing that she was dead.
54 And he put them all out, and took her by the hand, and called, saying, Maid, arise.
55 And her spirit came again, and she arose straightway: and he commanded to give her meat.
56 And her parents were astonished: but he charged them that they should tell no man what was done.`,
"luke-09": `CHAPTER 9
The Twelve are sent out—Jesus feeds the five thousand—Peter testifies of Christ—Jesus foretells His death and resurrection—He is transfigured on the mount—He heals and teaches.
1 Then he called his twelve disciples together, and gave them power and authority over all devils, and to cure diseases.
2 And he sent them to preach the kingdom of God, and to heal the sick.
3 And he said unto them, Take nothing for your journey, neither staves, nor scrip, neither bread, neither money; neither have two coats apiece.
4 And whatsoever house ye enter into, there abide, and thence depart.
5 And whosoever will not receive you, when ye go out of that city, shake off the very dust from your feet for a testimony against them.
6 And they departed, and went through the towns, preaching the gospel, and healing every where.
7 ¶ Now Herod the tetrarch heard of all that was done by him: and he was perplexed, because that it was said of some, that John was risen from the dead;
8 And of some, that Elias had appeared; and of others, that one of the old prophets was risen again.
9 And Herod said, John have I beheaded: but who is this, of whom I hear such things? And he desired to see him.
10 ¶ And the apostles, when they were returned, told him all that they had done. And he took them, and went aside privately into a desert place belonging to the city called Bethsaida.
11 And the people, when they knew it, followed him: and he received them, and spake unto them of the kingdom of God, and healed them that had need of healing.
12 And when the day began to wear away, then came the twelve, and said unto him, Send the multitude away, that they may go into the towns and country round about, and lodge, and get victuals: for we are here in a desert place.
13 But he said unto them, Give ye them to eat. And they said, We have no more but five loaves and two fishes; except we should go and buy meat for all this people.
14 For they were about five thousand men. And he said to his disciples, Make them sit down by fifties in a company.
15 And they did so, and made them all sit down.
16 Then he took the five loaves and the two fishes, and looking up to heaven, he blessed them, and brake, and gave to the disciples to set before the multitude.
17 And they did eat, and were all filled: and there was taken up of fragments that remained to them twelve baskets.
18 ¶ And it came to pass, as he was alone praying, his disciples were with him: and he asked them, saying, Whom say the people that I am?
19 They answering said, John the Baptist; but some say, Elias; and others say, that one of the old prophets is risen again.
20 He said unto them, But whom say ye that I am? Peter answering said, The Christ of God.
21 And he straitly charged them, and commanded them to tell no man that thing;
22 Saying, The Son of man must suffer many things, and be rejected of the elders and chief priests and scribes, and be slain, and be raised the third day.
23 ¶ And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.
24 For whosoever will save his life shall lose it: but whosoever will lose his life for my sake, the same shall save it.
25 For what is a man advantaged, if he gain the whole world, and lose himself, or be cast away?
26 For whosoever shall be ashamed of me and of my words, of him shall the Son of man be ashamed, when he shall come in his own glory, and in his Father’s, and of the holy angels.
27 But I tell you of a truth, there be some standing here, which shall not taste of death, till they see the kingdom of God.
28 ¶ And it came to pass about an eight days after these sayings, he took Peter and John and James, and went up into a mountain to pray.
29 And as he prayed, the fashion of his countenance was altered, and his raiment was white and glistering.
30 And, behold, there talked with him two men, which were Moses and Elias:
31 Who appeared in glory, and spake of his decease which he should accomplish at Jerusalem.
32 But Peter and they that were with him were heavy with sleep: and when they were awake, they saw his glory, and the two men that stood with him.
33 And it came to pass, as they departed from him, Peter said unto Jesus, Master, it is good for us to be here: and let us make three tabernacles; one for thee, and one for Moses, and one for Elias: not knowing what he said.
34 While he thus spake, there came a cloud, and overshadowed them: and they feared as they entered into the cloud.
35 And there came a voice out of the cloud, saying, This is my beloved Son: hear him.
36 And when the voice was past, Jesus was found alone. And they kept it close, and told no man in those days any of those things which they had seen.
37 ¶ And it came to pass, that on the next day, when they were come down from the hill, much people met him.
38 And, behold, a man of the company cried out, saying, Master, I beseech thee, look upon my son: for he is mine only child.
39 And, lo, a spirit taketh him, and he suddenly crieth out; and it teareth him that he foameth again, and bruising him hardly departeth from him.
40 And I besought thy disciples to cast him out; and they could not.
41 And Jesus answering said, O faithless and perverse generation, how long shall I be with you, and suffer you? Bring thy son hither.
42 And as he was yet a coming, the devil threw him down, and tare him. And Jesus rebuked the unclean spirit, and healed the child, and delivered him again to his father.
43 ¶ And they were all amazed at the mighty power of God. But while they wondered every one at all things which Jesus did, he said unto his disciples,
44 Let these sayings sink down into your ears: for the Son of man shall be delivered into the hands of men.
45 But they understood not this saying, and it was hid from them, that they perceived it not: and they feared to ask him of that saying.
46 ¶ Then there arose a reasoning among them, which of them should be greatest.
47 And Jesus, perceiving the thought of their heart, took a child, and set him by him,
48 And said unto them, Whosoever shall receive this child in my name receiveth me: and whosoever shall receive me receiveth him that sent me: for he that is least among you all, the same shall be great.
49 ¶ And John answered and said, Master, we saw one casting out devils in thy name; and we forbad him, because he followeth not with us.
50 And Jesus said unto him, Forbid him not: for he that is not against us is for us.
51 ¶ And it came to pass, when the time was come that he should be received up, he steadfastly set his face to go to Jerusalem,
52 And sent messengers before his face: and they went, and entered into a village of the Samaritans, to make ready for him.
53 And they did not receive him, because his face was as though he would go to Jerusalem.
54 And when his disciples James and John saw this, they said, Lord, wilt thou that we command fire to come down from heaven, and consume them, even as Elias did?
55 But he turned, and rebuked them, and said, Ye know not what manner of spirit ye are of.
56 For the Son of man is not come to destroy men’s lives, but to save them. And they went to another village.
57 ¶ And it came to pass, that, as they went in the way, a certain man said unto him, Lord, I will follow thee whithersoever thou goest.
58 And Jesus said unto him, Foxes have holes, and birds of the air have nests; but the Son of man hath not where to lay his head.
59 And he said unto another, Follow me. But he said, Lord, suffer me first to go and bury my father.
60 Jesus said unto him, Let the dead bury their dead: but go thou and preach the kingdom of God.
61 And another also said, Lord, I will follow thee; but let me first go bid them farewell, which are at home at my house.
62 And Jesus said unto him, No man, having put his hand to the plough, and looking back, is fit for the kingdom of God.`,
"luke-10": `CHAPTER 10
Jesus calls, empowers, and instructs the Seventy—They preach and heal—Those who receive Christ’s disciples receive Christ—The Father is revealed by the Son—Jesus gives the parable of the good Samaritan.
1 After these things the Lord appointed other seventy also, and sent them two and two before his face into every city and place, whither he himself would come.
2 Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest.
3 Go your ways: behold, I send you forth as lambs among wolves.
4 Carry neither purse, nor scrip, nor shoes: and salute no man by the way.
5 And into whatsoever house ye enter, first say, Peace be to this house.
6 And if the son of peace be there, your peace shall rest upon it: if not, it shall turn to you again.
7 And in the same house remain, eating and drinking such things as they give: for the labourer is worthy of his hire. Go not from house to house.
8 And into whatsoever city ye enter, and they receive you, eat such things as are set before you:
9 And heal the sick that are therein, and say unto them, The kingdom of God is come nigh unto you.
10 But into whatsoever city ye enter, and they receive you not, go your ways out into the streets of the same, and say,
11 Even the very dust of your city, which cleaveth on us, we do wipe off against you: notwithstanding be ye sure of this, that the kingdom of God is come nigh unto you.
12 But I say unto you, that it shall be more tolerable in that day for Sodom, than for that city.
13 Woe unto thee, Chorazin! woe unto thee, Bethsaida! for if the mighty works had been done in Tyre and Sidon, which have been done in you, they had a great while ago repented, sitting in sackcloth and ashes.
14 But it shall be more tolerable for Tyre and Sidon at the judgment, than for you.
15 And thou, Capernaum, which art exalted to heaven, shalt be thrust down to hell.
16 He that heareth you heareth me; and he that despiseth you despiseth me; and he that despiseth me despiseth him that sent me.
17 ¶ And the seventy returned again with joy, saying, Lord, even the devils are subject unto us through thy name.
18 And he said unto them, I beheld Satan as lightning fall from heaven.
19 Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you.
20 Notwithstanding in this rejoice not, that the spirits are subject unto you; but rather rejoice, because your names are written in heaven.
21 ¶ In that hour Jesus rejoiced in spirit, and said, I thank thee, O Father, Lord of heaven and earth, that thou hast hid these things from the wise and prudent, and hast revealed them unto babes: even so, Father; for so it seemed good in thy sight.
22 All things are delivered to me of my Father: and no man knoweth who the Son is, but the Father; and who the Father is, but the Son, and he to whom the Son will reveal him.
23 ¶ And he turned him unto his disciples, and said privately, Blessed are the eyes which see the things that ye see:
24 For I tell you, that many prophets and kings have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them.
25 ¶ And, behold, a certain lawyer stood up, and tempted him, saying, Master, what shall I do to inherit eternal life?
26 He said unto him, What is written in the law? how readest thou?
27 And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.
28 And he said unto him, Thou hast answered right: this do, and thou shalt live.
29 But he, willing to justify himself, said unto Jesus, And who is my neighbour?
30 And Jesus answering said, A certain man went down from Jerusalem to Jericho, and fell among thieves, which stripped him of his raiment, and wounded him, and departed, leaving him half dead.
31 And by chance there came down a certain priest that way: and when he saw him, he passed by on the other side.
32 And likewise a Levite, when he was at the place, came and looked on him, and passed by on the other side.
33 But a certain Samaritan, as he journeyed, came where he was: and when he saw him, he had compassion on him,
34 And went to him, and bound up his wounds, pouring in oil and wine, and set him on his own beast, and brought him to an inn, and took care of him.
35 And on the morrow when he departed, he took out two pence, and gave them to the host, and said unto him, Take care of him; and whatsoever thou spendest more, when I come again, I will repay thee.
36 Which now of these three, thinkest thou, was neighbour unto him that fell among the thieves?
37 And he said, He that shewed mercy on him. Then said Jesus unto him, Go, and do thou likewise.
38 ¶ Now it came to pass, as they went, that he entered into a certain village: and a certain woman named Martha received him into her house.
39 And she had a sister called Mary, which also sat at Jesus’ feet, and heard his word.
40 But Martha was cumbered about much serving, and came to him, and said, Lord, dost thou not care that my sister hath left me to serve alone? bid her therefore that she help me.
41 And Jesus answered and said unto her, Martha, Martha, thou art careful and troubled about many things:
42 But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her.`
};