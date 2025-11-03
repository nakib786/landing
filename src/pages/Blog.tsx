import { useState, useEffect, useRef } from 'react'
import StarField from '../components/StarField'
import FluidCursorEffect from '../components/ui/smokey-cursor-effect'
import ZodiacLogo from '../components/ZodiacLogo'
import HamburgerMenu from '../components/HamburgerMenu'
import { Link } from 'react-router-dom'

function Blog() {
  // Blog posts for all 12 zodiac signs
  const blogPosts = [
    {
      id: 1,
      title: "Aries: The Bold Pioneer of the Zodiac",
      sign: "Aries",
      dateRange: "March 21 - April 19",
      excerpt: "Discover the fearless leader within you. Aries, the first sign of the zodiac, embodies courage, initiative, and an unquenchable thirst for adventure.",
      date: "March 25, 2024",
      category: "Aries",
      content: `Aries, ruled by the fiery planet Mars, stands as the bold pioneer of the zodiac wheel. Born between March 21 and April 19, those under this sign are natural leaders who thrive on challenges and aren't afraid to blaze new trails. As the first sign in the astrological calendar, Aries represents the beginning of all things—new cycles, fresh starts, and the raw energy of creation itself.

The Ram, Aries' symbol, perfectly captures this sign's essence: fearless, headstrong, and always ready to charge forward. Aries individuals possess an innate courage that allows them to tackle obstacles head-on, often finding themselves at the forefront of innovation and change. Their ruling planet Mars, named after the Roman god of war, infuses them with dynamic energy, assertiveness, and an unwavering determination to achieve their goals.

What truly sets Aries apart is their impulsive nature and spontaneous approach to life. They don't just think about taking action—they do it. This can-do attitude makes them exceptional entrepreneurs, athletes, and trailblazers in any field they choose. However, their impulsive tendencies can sometimes lead to hasty decisions, and their competitive spirit might cause friction in collaborative environments.

In relationships, Aries brings passion and intensity. They're straightforward about their feelings and don't play games—what you see is what you get. Their partners often appreciate their honesty and directness, though they may need to work on patience and understanding others' perspectives. Aries loves the chase and thrives in relationships that keep them on their toes.

Career-wise, Aries excels in leadership roles and environments that reward initiative. They're natural entrepreneurs, military leaders, athletes, surgeons, and firefighters—any profession that requires quick thinking, courage, and decisive action. The key to Aries' success lies in learning to temper their impulsiveness with strategic planning and to channel their competitive nature positively.

One of Aries' greatest challenges is learning to slow down and consider the consequences of their actions. While their "act first, think later" approach often leads to exciting opportunities, it can also create unnecessary conflicts or missed chances for deeper reflection. Developing patience and emotional intelligence can help Aries achieve even greater heights.

The Aries energy teaches us all about the power of initiative, courage, and the willingness to be first. When we embrace our inner Aries, we tap into our ability to start new projects, take risks, and lead with confidence. The Ram reminds us that every journey begins with a single step—and Aries is never afraid to take that first bold step into the unknown.`
    },
    {
      id: 2,
      title: "Taurus: The Grounded Earth Sign of Stability",
      sign: "Taurus",
      dateRange: "April 20 - May 20",
      excerpt: "Explore the steady, reliable nature of Taurus—the zodiac's master of patience, persistence, and earthly pleasures.",
      date: "April 18, 2024",
      category: "Taurus",
      content: `Taurus, the second sign of the zodiac, represents stability, persistence, and an unshakeable connection to the material world. Born between April 20 and May 20, Taureans are ruled by Venus, the planet of love, beauty, and pleasure, which grants them a deep appreciation for life's sensual experiences and aesthetic beauty.

The Bull, Taurus' symbol, perfectly embodies this sign's characteristics: strong, steady, and determined. Just as a bull patiently works the land, Taurus individuals approach life with methodical persistence, building their foundations brick by brick until they create something lasting and meaningful. They are not interested in quick fixes or temporary solutions—Taurus wants the real thing, the genuine article, something that will stand the test of time.

Taureans possess an incredible ability to manifest their desires through sheer determination and patience. When a Taurus sets their mind on something, they will pursue it with unwavering focus until they achieve it. This tenacity, combined with their practical approach to problem-solving, makes them excellent builders, architects, gardeners, and financial advisors. They understand the value of hard work and are willing to invest time and effort into creating lasting value.

In the realm of relationships, Taurus brings stability, loyalty, and deep emotional security. They are not the type to rush into relationships—they take their time getting to know someone, building trust gradually and creating a solid foundation for long-term commitment. Once committed, Taurus is incredibly devoted and will go to great lengths to protect and nurture their loved ones. However, their stubbornness can sometimes create challenges when compromise is needed.

Material comfort and security are essential to Taurus' well-being. They have a natural talent for creating beautiful, comfortable environments and often surround themselves with quality possessions that bring them pleasure. This isn't mere materialism—for Taurus, beautiful surroundings, good food, fine art, and physical comforts are sources of genuine happiness and emotional nourishment.

Career-wise, Taurus thrives in fields that reward patience, persistence, and attention to detail. They make excellent chefs, artists, real estate agents, bankers, gardeners, and craftspeople. Their ability to work steadily toward long-term goals, combined with their appreciation for quality over quantity, makes them valuable in any profession that requires dedication and refinement.

The shadow side of Taurus includes stubbornness, possessiveness, and resistance to change. When they become too attached to their routines or possessions, they may miss opportunities for growth. Learning to be more flexible and open to new experiences while maintaining their core values is a key lesson for Taureans.

Taurus teaches us the importance of grounding, patience, and appreciating life's simple pleasures. In our fast-paced world, this earth sign reminds us to slow down, savor the moment, and build our lives on solid foundations. The Bull's wisdom lies in understanding that true security comes not from external possessions alone, but from the inner peace that comes with living authentically and appreciating what we have.`
    },
    {
      id: 3,
      title: "Gemini: The Curious Twins of Communication",
      sign: "Gemini",
      dateRange: "May 21 - June 20",
      excerpt: "Dive into the dual nature of Gemini—the sign of curiosity, communication, and endless intellectual exploration.",
      date: "May 22, 2024",
      category: "Gemini",
      content: `Gemini, represented by the Twins, is the third sign of the zodiac and perhaps the most misunderstood. Born between May 21 and June 20, Geminis are ruled by Mercury, the planet of communication, intellect, and movement, which grants them an insatiable curiosity about the world and an unparalleled ability to express themselves.

The Twins symbol perfectly captures Gemini's dual nature—they can see both sides of every situation, adapt to different social contexts with ease, and switch between different interests and personas effortlessly. This duality is not a sign of indecisiveness but rather a reflection of Gemini's natural ability to synthesize multiple perspectives and ideas. They are the zodiac's great communicators, storytellers, and information gatherers.

Gemini's ruling planet Mercury gives them a restless intellect that constantly seeks new information, experiences, and connections. They are natural journalists, writers, teachers, and speakers who excel at breaking down complex ideas and making them accessible to others. Their minds work at lightning speed, allowing them to process information quickly and make connections that others might miss.

Socially, Gemini is the life of the party—charming, witty, and always ready with an interesting story or observation. They have a natural gift for conversation and can adapt their communication style to connect with anyone, from the most intellectual professors to the most down-to-earth workers. However, their need for mental stimulation can sometimes make them seem flighty or inconsistent, especially to more grounded signs.

In relationships, Gemini brings intellectual companionship, humor, and a sense of adventure. They need partners who can keep up with their mental energy and who won't try to tie them down too tightly. The key to a successful relationship with a Gemini is understanding that their need for freedom and variety doesn't mean they're not committed—they just need space to explore and grow.

Career-wise, Gemini excels in any field that involves communication, information, or variety. They make excellent writers, journalists, broadcasters, teachers, salespeople, translators, and digital marketers. Their ability to multitask and adapt quickly makes them valuable in fast-paced environments. However, they need to be careful not to spread themselves too thin or jump between too many projects without finishing them.

One of Gemini's greatest strengths is their adaptability. They can thrive in almost any environment because they're quick to learn and adjust. This flexibility serves them well in our rapidly changing world, where the ability to pivot and learn new skills is increasingly important. However, they need to balance this adaptability with consistency, especially in relationships and long-term projects.

The shadow side of Gemini includes restlessness, superficiality, and difficulty making decisions when faced with too many options. They can become overwhelmed by information overload and may struggle to commit to one path when multiple exciting opportunities present themselves. Learning to focus and prioritize is crucial for Gemini's growth.

Gemini teaches us the power of communication, curiosity, and intellectual flexibility. In an age of information, this air sign shows us how to navigate complexity, connect ideas, and bridge different worlds through the power of words and ideas. The Twins remind us that understanding multiple perspectives makes us wiser, more compassionate, and better equipped to navigate our increasingly interconnected world.`
    },
    {
      id: 4,
      title: "Cancer: The Nurturing Water Sign of Emotion",
      sign: "Cancer",
      dateRange: "June 21 - July 22",
      excerpt: "Discover the compassionate, intuitive nature of Cancer—the zodiac's emotional anchor and protective guardian.",
      date: "June 23, 2024",
      category: "Cancer",
      content: `Cancer, the fourth sign of the zodiac, is represented by the Crab and ruled by the Moon, the celestial body associated with emotions, intuition, and the subconscious. Born between June 21 and July 22, Cancers are deeply emotional, nurturing, and intuitive beings who serve as the zodiac's emotional anchor and protective guardians.

The Crab perfectly symbolizes Cancer's nature: soft and sensitive inside, protected by a hard outer shell. Like the crab that carries its home on its back, Cancers are deeply connected to their family, home, and emotional roots. They create safe spaces wherever they go and have an innate ability to make others feel cared for and understood. This nurturing quality makes them natural caregivers, parents, and healers.

The Moon's influence gives Cancers their remarkable emotional depth and intuitive abilities. They are highly sensitive to the emotional atmosphere around them and can often sense what others are feeling before words are spoken. This emotional intelligence makes them excellent therapists, counselors, nurses, and anyone who works in healing or caregiving professions. However, this same sensitivity means they need time alone to recharge and process their feelings.

In relationships, Cancer brings deep emotional commitment, loyalty, and a desire to create a sense of family and belonging. They are incredibly romantic and seek partners who can provide emotional security and understand their need for closeness and nurturing. Once committed, Cancers will go to great lengths to protect and care for their loved ones. However, their sensitivity can sometimes lead to moodiness or being easily hurt when they feel misunderstood or unappreciated.

Family and home are central to Cancer's life. They have a strong attachment to their roots and often maintain close relationships with family members throughout their lives. Creating a beautiful, comfortable home environment is important to them, and they excel at making any space feel warm and welcoming. Their homes often become gathering places where loved ones feel safe and nurtured.

Career-wise, Cancers excel in fields that allow them to care for others or work from a place of emotional understanding. They make excellent chefs (especially family-style cooking), interior decorators, real estate agents, nurses, therapists, social workers, and anyone who works with children or families. Their intuitive understanding of what people need, combined with their nurturing nature, makes them valuable in any service-oriented profession.

One of Cancer's greatest strengths is their memory—especially emotional memory. They remember how people made them feel, significant moments in relationships, and the emotional nuances of past experiences. This ability to retain emotional information helps them understand patterns in relationships and navigate complex emotional situations. However, they need to be careful not to hold onto hurts too long or let past experiences cloud present opportunities.

The shadow side of Cancer includes being overly sensitive, moody, or clinging to the past. Their emotional nature can sometimes overwhelm them, and they may retreat into their shell when feeling hurt or misunderstood. Learning to communicate their needs clearly and not take everything personally is important for Cancer's growth.

Cancer teaches us about the power of emotional intelligence, nurturing, and creating safe spaces for ourselves and others. In a world that often values logic over emotion, Cancer reminds us that feelings are valid, intuition is a real form of knowledge, and creating emotional security is as important as any material achievement. The Crab's wisdom lies in understanding that vulnerability is a strength and that caring for others enriches our own lives.`
    },
    {
      id: 5,
      title: "Leo: The Radiant Lion of Self-Expression",
      sign: "Leo",
      dateRange: "July 23 - August 22",
      excerpt: "Explore the confident, creative, and generous nature of Leo—the zodiac's natural-born leader and performer.",
      date: "July 25, 2024",
      category: "Leo",
      content: `Leo, the fifth sign of the zodiac, is represented by the majestic Lion and ruled by the Sun, the center of our solar system and the source of all light and life. Born between July 23 and August 22, Leos are natural-born leaders, performers, and creative forces who radiate confidence, warmth, and a magnetic charisma that draws others to them.

The Lion perfectly embodies Leo's regal nature: proud, confident, and unapologetically themselves. Just as the lion is the king of the jungle, Leos have a natural authority and presence that commands attention wherever they go. They don't need to demand respect—it comes naturally because of who they are and how they carry themselves. This regal bearing is not arrogance but rather a deep confidence in their own worth and capabilities.

The Sun's influence makes Leo radiant, warm, and life-giving. They have a natural ability to light up any room they enter and to inspire others to shine their own light. Leos are generous with their energy, encouragement, and support, often going out of their way to help others recognize and develop their talents. This generosity is one of Leo's most beautiful qualities—they genuinely want to see others succeed.

In relationships, Leo brings loyalty, passion, and a desire to create dramatic, romantic experiences. They love grand gestures, celebrating their partners, and being celebrated in return. Leos need partners who appreciate their creativity, support their ambitions, and don't try to dim their light. However, they need to learn that love isn't always about being the center of attention—sometimes it's about making their partner feel equally special.

Creativity and self-expression are central to Leo's identity. Whether they're artists, performers, writers, or simply people who approach life as an art form, Leos have a natural need to express themselves and share their unique perspective with the world. They thrive when given opportunities to be creative, whether in their careers or personal hobbies.

Career-wise, Leos excel in fields that allow them to lead, perform, or express their creativity. They make excellent actors, directors, musicians, entrepreneurs, managers, teachers, and anyone who works in the public eye. Their natural charisma and ability to inspire others make them effective leaders in any field. However, they need environments that allow them some autonomy and recognition for their contributions.

One of Leo's greatest strengths is their courage—they're not afraid to take center stage, speak their truth, or pursue their dreams even when others doubt them. This bravery, combined with their natural optimism, helps them overcome obstacles and achieve goals that might intimidate others. They have a childlike enthusiasm for life that keeps them young at heart.

The shadow side of Leo includes vanity, pride, and a need for constant validation. When their confidence is shaken, they can become overly dramatic or demanding of attention. Learning to find self-worth from within rather than external validation is a key lesson for Leos. They also need to remember that true leadership sometimes means stepping back and letting others shine.

Leo teaches us about the power of self-expression, confidence, and generosity. In a world where many people hide their light, Leo shows us how to shine boldly and authentically. The Lion's wisdom lies in understanding that our unique gifts are meant to be shared, that confidence comes from self-love rather than comparison, and that lifting others up doesn't diminish our own light—it amplifies it. When Leo learns to balance their natural charisma with humility, they become truly magnetic leaders who inspire others to be their best selves.`
    },
    {
      id: 6,
      title: "Virgo: The Meticulous Perfectionist of Service",
      sign: "Virgo",
      dateRange: "August 23 - September 22",
      excerpt: "Delve into the analytical, detail-oriented world of Virgo—the zodiac's master of precision, service, and practical wisdom.",
      date: "August 24, 2024",
      category: "Virgo",
      content: `Virgo, the sixth sign of the zodiac, is represented by the Maiden and ruled by Mercury, the planet of communication and analysis. Born between August 23 and September 22, Virgos are the zodiac's perfectionists, known for their meticulous attention to detail, practical wisdom, and deep desire to be of service to others.

The Maiden symbolizes Virgo's pure, refined nature—always striving for improvement and perfection. Like the maiden who tends her garden with care, Virgos approach life with a methodical, organized mindset, constantly refining and improving everything they touch. This isn't about perfectionism for its own sake, but rather a genuine desire to make things better, more efficient, and more useful.

Mercury's influence gives Virgos their sharp analytical minds and ability to notice details others might miss. They have a natural gift for problem-solving, organization, and finding practical solutions to complex challenges. This analytical ability makes them excellent researchers, editors, technicians, and anyone who works with systems, data, or details. However, they can sometimes overthink things or become paralyzed by analysis when action is needed.

In relationships, Virgo brings loyalty, thoughtfulness, and practical support. They show their love through acts of service—remembering important details, helping solve problems, and taking care of the practical aspects of life that others might overlook. They need partners who appreciate their attention to detail and who don't mistake their critical nature for a lack of care—when Virgo critiques, it's usually because they want to help improve things.

Health and wellness are often important to Virgos. They have a natural interest in nutrition, exercise, and holistic health practices. Many Virgos become doctors, nutritionists, therapists, or work in wellness-related fields. Their analytical minds help them understand how the body works, and their service-oriented nature drives them to help others achieve better health.

Career-wise, Virgos excel in fields that reward precision, organization, and attention to detail. They make excellent accountants, editors, researchers, quality control specialists, nurses, technicians, and project managers. Their ability to create systems, improve processes, and catch errors makes them invaluable in any organization. However, they need to be careful not to become so focused on details that they lose sight of the bigger picture.

One of Virgo's greatest strengths is their humility and willingness to serve. Unlike some signs that need to be in the spotlight, Virgos often work behind the scenes, making sure everything runs smoothly. They take pride in their work regardless of whether they receive recognition, and this selfless approach often leads to unexpected success and appreciation.

The shadow side of Virgo includes perfectionism, criticism (especially self-criticism), and anxiety about not living up to their own high standards. They can be overly critical of themselves and others, which can create tension in relationships. Learning to accept imperfection and to balance their analytical nature with compassion is crucial for Virgo's growth.

Virgo teaches us about the power of attention to detail, service, and continuous improvement. In a world that often values speed over quality, Virgo reminds us that taking time to do things right, to care for the small details, and to be of service to others creates lasting value. The Maiden's wisdom lies in understanding that perfection isn't the goal—rather, it's the commitment to improvement, the willingness to serve, and the understanding that every small action contributes to a larger whole. When Virgos learn to balance their high standards with self-compassion, they become true masters of their craft and invaluable contributors to their communities.`
    },
    {
      id: 7,
      title: "Libra: The Harmonious Diplomat of Balance",
      sign: "Libra",
      dateRange: "September 23 - October 22",
      excerpt: "Experience the refined, relationship-focused energy of Libra—the zodiac's seeker of harmony, beauty, and justice.",
      date: "September 25, 2024",
      category: "Libra",
      content: `Libra, the seventh sign of the zodiac, is represented by the Scales and ruled by Venus, the planet of love, beauty, and aesthetics. Born between September 23 and October 22, Libras are the zodiac's diplomats, artists, and relationship specialists, constantly seeking balance, harmony, and beauty in all aspects of life.

The Scales perfectly capture Libra's essential nature: the eternal search for balance and justice. Libras have an innate sense of fairness and an ability to see all sides of a situation, which makes them natural mediators, lawyers, and counselors. They abhor conflict and will go to great lengths to create harmony, sometimes even avoiding necessary confrontations to keep the peace.

Venus's influence gives Libra their refined aesthetic sense, love of beauty, and natural charm. They have an eye for design, fashion, and art, and often surround themselves with beautiful objects and environments. This appreciation for aesthetics isn't superficial—for Libra, beauty has the power to uplift, inspire, and create harmony. They understand that beauty is not just about appearance but about creating spaces and experiences that feel balanced and harmonious.

In relationships, Libra brings partnership, cooperation, and a genuine desire to create beautiful connections with others. They thrive in relationships and often define themselves through their partnerships. Libras are romantic, attentive partners who know how to create special moments and keep relationships interesting. However, they sometimes struggle with independence and may lose themselves in relationships, needing to remember to maintain their own identity.

Social skills are one of Libra's greatest strengths. They have a natural ability to make others feel comfortable and appreciated. Their charm, diplomacy, and genuine interest in people make them excellent hosts, event planners, and anyone who works with people. They understand social dynamics and know how to create environments where people feel at ease.

Career-wise, Libras excel in fields that involve relationships, aesthetics, or justice. They make excellent lawyers, mediators, diplomats, interior designers, fashion designers, artists, public relations specialists, and relationship counselors. Their ability to see multiple perspectives and create harmony makes them valuable in any field that requires balancing different interests or working with people.

One of Libra's greatest challenges is decision-making. Their ability to see all sides of every situation can sometimes lead to indecision or procrastination. They may find themselves endlessly weighing options, unable to commit to a choice. Learning to trust their intuition and accept that perfect balance isn't always possible is important for Libra's growth.

The shadow side of Libra includes people-pleasing, indecisiveness, and avoiding conflict to the point where problems don't get resolved. Their desire for harmony can sometimes mean they sacrifice their own needs or avoid necessary confrontations. Learning to assert themselves and accept that some conflict is healthy and necessary is crucial.

Libra teaches us about the power of balance, partnership, and beauty. In a world that often values extremes, Libra shows us how to find the middle path, to see all perspectives, and to create harmony out of chaos. The Scales' wisdom lies in understanding that true balance isn't about perfection but about constant adjustment, that relationships require give and take, and that beauty has the power to transform our world. When Libras learn to balance their need for harmony with the courage to stand up for what's right, they become true agents of justice and creators of beauty.`
    },
    {
      id: 8,
      title: "Scorpio: The Intense Transformer of Depth",
      sign: "Scorpio",
      dateRange: "October 23 - November 21",
      excerpt: "Journey into the mysterious depths of Scorpio—the zodiac's most intense, transformative, and emotionally powerful sign.",
      date: "October 24, 2024",
      category: "Scorpio",
      content: `Scorpio, the eighth sign of the zodiac, is represented by the Scorpion and ruled by Mars and Pluto—planets associated with power, transformation, and regeneration. Born between October 23 and November 21, Scorpios are the zodiac's most intense and mysterious sign, known for their emotional depth, magnetic presence, and ability to transform themselves and others.

The Scorpion symbolizes Scorpio's defensive and powerful nature, but this sign actually has three symbols: the Scorpion (representing the defensive, intense side), the Eagle (representing the evolved, visionary side), and the Phoenix (representing the transformative, reborn side). This triple symbolism reflects Scorpio's complexity and their journey from intensity to transformation to transcendence.

Pluto's influence gives Scorpios their incredible depth, intensity, and regenerative power. They have an ability to go deep into emotions, psychology, and the mysteries of life that others might shy away from. This depth makes them natural psychologists, researchers, detectives, and anyone who works with uncovering hidden truths. They're not interested in surface-level interactions—Scorpio wants to know what's really going on beneath the surface.

In relationships, Scorpio brings passion, loyalty, and emotional intensity. They form deep, transformative bonds and are incredibly loyal to those they trust. However, they're also highly private and may take time to open up. Once committed, Scorpios are all-in, but they expect the same level of commitment and honesty from their partners. Jealousy and possessiveness can be challenges if they don't feel secure.

Career-wise, Scorpios excel in fields that involve depth, transformation, or power. They make excellent psychologists, therapists, surgeons, researchers, detectives, financial advisors, and anyone who works with uncovering secrets or facilitating transformation. Their ability to see through facades and understand hidden dynamics makes them powerful in any field. Many successful CEOs and leaders are Scorpios because they understand power dynamics and aren't afraid to make tough decisions.

One of Scorpio's greatest strengths is their ability to transform themselves and rise from the ashes of difficult experiences. Like the Phoenix, they have an incredible capacity for regeneration and renewal. What would destroy others often makes Scorpios stronger. They understand that true transformation requires going through the dark places, not around them.

The shadow side of Scorpio includes intensity, jealousy, secrecy, and a tendency to hold grudges. When they feel betrayed or hurt, they can become vindictive or withdraw completely. Learning to forgive, to let go of control, and to trust others is crucial for Scorpio's growth. They also need to learn that not everyone can handle their intensity and that's okay.

Scorpio teaches us about the power of transformation, depth, and regeneration. In a world that often values surface-level interactions, Scorpio shows us how to go deep, to face the dark places, and to emerge transformed. The Scorpion's wisdom lies in understanding that true power comes from within, that transformation requires facing our shadows, and that the most profound healing comes from going through pain, not avoiding it. When Scorpios learn to balance their intensity with compassion and their need for control with trust, they become powerful agents of transformation who help others heal and grow.`
    },
    {
      id: 9,
      title: "Sagittarius: The Adventurous Philosopher of Freedom",
      sign: "Sagittarius",
      dateRange: "November 22 - December 21",
      excerpt: "Embark on the philosophical journey of Sagittarius—the zodiac's eternal student, explorer, and seeker of truth.",
      date: "November 23, 2024",
      category: "Sagittarius",
      content: `Sagittarius, the ninth sign of the zodiac, is represented by the Archer (Centaur with a bow and arrow) and ruled by Jupiter, the planet of expansion, philosophy, and higher learning. Born between November 22 and December 21, Sagittarians are the zodiac's eternal students, philosophers, and adventurers, constantly seeking truth, wisdom, and new experiences.

The Archer aiming their arrow toward the heavens perfectly captures Sagittarius's nature: always aiming high, reaching for something greater, and believing in the power of aspiration. Just as the arrow is released and travels far, Sagittarians are always moving forward, exploring new horizons, both physical and intellectual. They're not interested in staying in one place for too long—there's always another mountain to climb, another idea to explore, another truth to discover.

Jupiter's influence makes Sagittarians optimistic, expansive, and philosophical. They have a natural curiosity about life's big questions and a desire to understand the meaning of existence. This philosophical nature makes them excellent teachers, philosophers, travel writers, and anyone who seeks to expand knowledge and understanding. They believe that life is an adventure to be lived fully, and they're not afraid to take risks in pursuit of their dreams.

In relationships, Sagittarius brings honesty, humor, and a sense of adventure. They're straightforward about their feelings and don't like to play games. However, they also value their freedom and independence, which can make them seem commitment-phobic. The key to a successful relationship with a Sagittarius is finding someone who understands their need for space and adventure and who shares their enthusiasm for exploration.

Travel and exploration are central to Sagittarius's identity. Whether they're traveling physically around the world or intellectually through books and ideas, Sagittarians need to feel like they're expanding their horizons. They're natural explorers who thrive on new experiences, cultures, and perspectives. This wanderlust isn't just about seeing new places—it's about understanding different ways of living and thinking.

Career-wise, Sagittarians excel in fields that allow them to explore, teach, or expand boundaries. They make excellent teachers, professors, travel writers, photographers, philosophers, lawyers, and anyone who works in international business or cultural exchange. Their ability to see the big picture and inspire others makes them valuable leaders and educators.

One of Sagittarius's greatest strengths is their honesty and directness. They're not afraid to speak their truth, even when it's uncomfortable. This honesty can be refreshing, though it can also be tactless at times. They value truth over comfort, which makes them excellent advisors and truth-tellers. However, they need to learn that sometimes diplomacy is necessary.

The shadow side of Sagittarius includes restlessness, impatience, and a tendency to make promises they can't keep. Their enthusiasm can lead them to overcommit, and their need for freedom can make them unreliable in relationships or projects that require long-term commitment. Learning to follow through and to balance their adventurous spirit with responsibility is important for Sagittarius's growth.

Sagittarius teaches us about the power of exploration, optimism, and seeking truth. In a world that can become limiting, Sagittarius shows us how to expand our horizons, to stay curious, and to believe in possibilities. The Archer's wisdom lies in understanding that life is a journey, not a destination, that truth is worth seeking even when it challenges our beliefs, and that adventure can be found both in distant lands and in the expansion of our minds. When Sagittarians learn to balance their need for freedom with commitment and to channel their restlessness into productive exploration, they become inspiring guides who help others expand their own horizons and live more fully.`
    },
    {
      id: 10,
      title: "Capricorn: The Ambitious Architect of Success",
      sign: "Capricorn",
      dateRange: "December 22 - January 19",
      excerpt: "Climb the mountain of achievement with Capricorn—the zodiac's disciplined, ambitious builder of lasting legacies.",
      date: "December 23, 2024",
      category: "Capricorn",
      content: `Capricorn, the tenth sign of the zodiac, is represented by the Sea Goat (a mythical creature with the head of a goat and tail of a fish) and ruled by Saturn, the planet of discipline, structure, and time. Born between December 22 and January 19, Capricorns are the zodiac's ambitious architects, known for their discipline, perseverance, and ability to build lasting success through hard work and patience.

The Sea Goat perfectly symbolizes Capricorn's nature: climbing from the depths of the sea (emotions, beginnings) up the mountain to the highest peak (achievement, mastery). This imagery reflects Capricorn's journey of mastering themselves, their circumstances, and their ambitions. They understand that success is a long-term game and are willing to do whatever it takes to reach the top, even if it means starting from the bottom.

Saturn's influence gives Capricorns their remarkable discipline, patience, and sense of responsibility. They understand that nothing worth having comes easily and are willing to put in the hard work required for long-term success. This disciplined approach makes them excellent managers, CEOs, architects, and anyone who builds systems and structures that last. They're not interested in quick wins—Capricorn wants to build something that will stand the test of time.

In relationships, Capricorn brings stability, loyalty, and a commitment to building something lasting. They're not interested in casual flings—when they commit, they're in it for the long haul. They show their love through practical support, being reliable, and helping their partners achieve their goals. However, they can sometimes seem reserved or emotionally distant, especially early in relationships, because they take time to open up and trust.

Career and ambition are central to Capricorn's identity. They have a natural understanding of hierarchy, systems, and how to climb the ladder of success. Many Capricorns find themselves in leadership positions because they combine ambition with competence and reliability. They make excellent business leaders, politicians, engineers, architects, and anyone who builds systems that serve long-term goals. Their ability to see the bigger picture while managing details makes them valuable in any organization.

One of Capricorn's greatest strengths is their patience and long-term thinking. While others might get discouraged by setbacks, Capricorns see them as part of the process. They understand that building something meaningful takes time, and they're willing to wait. This patience, combined with their discipline, often leads to extraordinary achievements that seemed impossible to others.

The shadow side of Capricorn includes workaholism, emotional suppression, and becoming too focused on achievement at the expense of relationships and personal happiness. They can become rigid, overly serious, or pessimistic when they forget that success is about more than just achievement. Learning to balance work with play, to express emotions, and to find joy in the journey is crucial for Capricorn's growth.

Capricorn teaches us about the power of discipline, patience, and building something lasting. In a world that often values quick results, Capricorn shows us how to play the long game, to build strong foundations, and to achieve success through consistent effort over time. The Sea Goat's wisdom lies in understanding that true success comes from within, that discipline is a form of self-love, and that building a legacy requires both ambition and humility. When Capricorns learn to balance their drive for achievement with emotional connection and to find meaning beyond material success, they become wise leaders who inspire others to reach for their highest potential while building something meaningful that serves the greater good.`
    },
    {
      id: 11,
      title: "Aquarius: The Visionary Innovator of Progress",
      sign: "Aquarius",
      dateRange: "January 20 - February 18",
      excerpt: "Explore the forward-thinking world of Aquarius—the zodiac's revolutionary, humanitarian, and innovative force.",
      date: "January 22, 2025",
      category: "Aquarius",
      content: `Aquarius, the eleventh sign of the zodiac, is represented by the Water Bearer and ruled by Uranus (and traditionally Saturn), planets associated with innovation, revolution, and breaking free from tradition. Born between January 20 and February 18, Aquarians are the zodiac's visionaries, known for their innovative thinking, humanitarian ideals, and ability to see possibilities that others can't imagine.

The Water Bearer pouring water symbolizes Aquarius's nature: sharing knowledge, ideas, and inspiration with the world. Just as water is essential for life, Aquarians understand that progress and innovation are essential for human evolution. They're not content with the status quo—they see how things could be better and work to make their visions reality. This forward-thinking makes them natural innovators, scientists, activists, and revolutionaries.

Uranus's influence gives Aquarians their innovative, unconventional, and revolutionary nature. They're natural rule-breakers who question authority, challenge traditions, and think outside the box. This ability to see beyond conventional thinking makes them excellent inventors, scientists, technologists, and anyone who works on the cutting edge of their field. They're often ahead of their time, introducing ideas and innovations that others will only understand years later.

In relationships, Aquarius brings friendship, intellectual connection, and a respect for independence. They value relationships that are built on friendship and mutual respect rather than possessiveness or traditional roles. They're attracted to people who share their values and ideals and who give them the space to be themselves. However, they can sometimes seem emotionally distant because they process feelings through their intellect rather than their emotions.

Humanitarianism and social justice are central to Aquarius's identity. They have a deep concern for humanity as a whole and often dedicate themselves to causes that benefit society. Many Aquarians work in fields like technology, science, activism, or social work where they can contribute to progress and help others. They believe that innovation should serve the greater good, not just personal gain.

Career-wise, Aquarians excel in fields that allow them to innovate, help others, or work with cutting-edge ideas. They make excellent scientists, inventors, tech entrepreneurs, activists, social workers, astrologers, and anyone who works with new ideas or technologies. Their ability to see future possibilities and think unconventionally makes them valuable in fields that are constantly evolving.

One of Aquarius's greatest strengths is their ability to think independently and see the bigger picture. They're not swayed by popular opinion or social pressure—they think for themselves and make decisions based on their own values and logic. This independence makes them natural leaders in movements for change and progress. They understand that true innovation requires breaking free from limiting beliefs and structures.

The shadow side of Aquarius includes detachment, rebelliousness for its own sake, and a tendency to prioritize ideas over people. They can become so focused on their vision for the future that they forget about the present and the people in their lives. Learning to balance their visionary thinking with emotional connection and to be flexible when their innovations don't work is important for Aquarius's growth.

Aquarius teaches us about the power of innovation, independence, and progress. In a world that often resists change, Aquarius shows us how to think differently, to challenge the status quo, and to create a better future. The Water Bearer's wisdom lies in understanding that true progress comes from innovation that serves humanity, that independence of thought is essential for growth, and that the future belongs to those who dare to imagine it differently. When Aquarians learn to balance their innovative spirit with emotional connection and to ground their visions in practical action, they become powerful agents of positive change who help move humanity forward while maintaining their unique perspective and independence.`
    },
    {
      id: 12,
      title: "Pisces: The Intuitive Dreamer of Compassion",
      sign: "Pisces",
      dateRange: "February 19 - March 20",
      excerpt: "Dive into the mystical depths of Pisces—the zodiac's most intuitive, compassionate, and spiritually connected sign.",
      date: "February 20, 2025",
      category: "Pisces",
      content: `Pisces, the twelfth and final sign of the zodiac, is represented by two Fish swimming in opposite directions and ruled by Neptune (and traditionally Jupiter), planets associated with dreams, intuition, spirituality, and the unconscious. Born between February 19 and March 20, Pisceans are the zodiac's mystics, artists, and empaths, known for their incredible intuition, compassion, and deep connection to the spiritual and emotional realms.

The two Fish swimming in different directions perfectly capture Pisces's dual nature: one fish swimming toward the material world and one toward the spiritual realm. This represents Pisces's challenge of navigating both worlds—the practical reality of everyday life and the mystical world of dreams, intuition, and spiritual connection. Pisceans often feel like they're living in two worlds simultaneously, which can be both a blessing and a challenge.

Neptune's influence gives Pisceans their remarkable intuition, creativity, and spiritual sensitivity. They have an almost psychic ability to sense what others are feeling and to understand situations on an intuitive level. This sensitivity makes them natural healers, artists, musicians, therapists, and anyone who works with emotions, creativity, or spirituality. However, this same sensitivity means they absorb the energy around them and need time alone to recharge and reconnect with themselves.

In relationships, Pisces brings empathy, romance, and a deep emotional connection. They're incredibly intuitive about their partners' needs and often know what someone needs before they ask. They're romantic, devoted partners who see the best in those they love. However, they can sometimes lose themselves in relationships, becoming so attuned to their partner's needs that they forget their own. They need partners who appreciate their sensitivity and who can provide grounding and stability.

Creativity and artistic expression are central to Pisces's identity. Many of the world's greatest artists, musicians, and writers are Pisceans because they have an ability to channel emotions, dreams, and spiritual insights into creative expression. They understand that art is a bridge between the material and spiritual worlds, and they use their creativity to help others connect with deeper truths and emotions.

Career-wise, Pisceans excel in fields that allow them to express their creativity, intuition, or compassion. They make excellent artists, musicians, writers, therapists, healers, spiritual counselors, nurses, and anyone who works with helping others or creative expression. Their ability to understand and channel emotions, combined with their intuitive insights, makes them valuable in any field that requires empathy and creativity.

One of Pisces's greatest strengths is their compassion and ability to forgive. They have an incredible capacity for empathy and can understand perspectives and experiences beyond their own. This makes them excellent healers and counselors who can help others navigate difficult emotions and experiences. However, they need to be careful not to become so absorbed in others' problems that they neglect themselves.

The shadow side of Pisces includes escapism, confusion, and becoming overwhelmed by emotions. Their sensitivity can sometimes lead them to escape reality through various means—whether substance use, daydreaming, or avoiding difficult situations. They can also become so absorbed in others' emotions that they lose their own sense of identity. Learning to create boundaries, to stay grounded, and to distinguish between their own feelings and others' is crucial for Pisces's growth.

Pisces teaches us about the power of intuition, compassion, and spiritual connection. In a world that often values logic over feeling, Pisces shows us how to tap into our intuition, to feel deeply, and to connect with something greater than ourselves. The Fish's wisdom lies in understanding that true compassion includes self-compassion, that intuition is a real form of knowing, and that we can be both grounded in reality and connected to the spiritual realm. When Pisceans learn to balance their sensitivity with boundaries, to ground their dreams in action, and to honor both their material and spiritual natures, they become wise healers and artists who help others connect with their own intuition, creativity, and capacity for compassion.`
    }
  ]

  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when modal is open and reset scroll position
  useEffect(() => {
    if (selectedPost) {
      // Immediately scroll window to top before showing modal
      window.scrollTo({ top: 0, behavior: 'instant' })
      document.body.style.overflow = 'hidden'
      
      // Reset modal content scroll to top after render
      requestAnimationFrame(() => {
        if (modalContentRef.current) {
          modalContentRef.current.scrollTop = 0
        }
      })
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedPost])

  return (
    <>
      <FluidCursorEffect minimal />
      
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated star field background */}
        <StarField />
        
        {/* Navigation */}
        <nav className={`relative z-20 p-6 transition-opacity ${selectedPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <ZodiacLogo />
            </Link>
          </div>
        </nav>
        
        {/* Hamburger Menu */}
        <div className={selectedPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}>
          <HamburgerMenu />
        </div>

        {/* Main content */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
              Explore insights, tips, and stories about astrology and horoscopes
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 animate-card-glow card-glow-hover cursor-pointer h-full"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-purple-200 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-end text-sm text-purple-300">
                  <span className="text-purple-400 hover:text-purple-300 transition-colors">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Blog Post Modal */}
          {selectedPost && (
            <div 
              className="fixed inset-0 z-[100] flex items-start justify-center p-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedPost(null)}
            >
              <div 
                className="relative max-w-3xl w-full max-h-[95vh] bg-gradient-to-br from-indigo-950/95 via-purple-900/95 to-pink-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/30 shadow-2xl animate-fade-in blog-modal-glow flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg border border-white/30 text-white transition-all z-20"
                  aria-label="Close"
                >
                  <span className="text-xl sm:text-2xl">×</span>
                </button>

                {/* Scrollable Modal Content */}
                <div ref={modalContentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                  <div className="pr-2 sm:pr-8">
                    <div className="mb-3 sm:mb-6">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/30 text-purple-200 text-xs sm:text-sm rounded-full">
                        {selectedPost.category}
                      </span>
                    </div>
                    
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 pr-10 sm:pr-0 leading-tight">
                      {selectedPost.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-purple-200 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                      <span className="font-semibold">{selectedPost.sign}</span>
                      <span>•</span>
                      <span>{selectedPost.dateRange}</span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <div className="text-purple-100 text-sm sm:text-base md:text-lg leading-6 sm:leading-relaxed whitespace-pre-line">
                        {selectedPost.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty State (if no posts) */}
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold text-white mb-4">No posts yet</h2>
              <p className="text-purple-200 text-lg">
                Blog posts will appear here soon!
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full py-6 text-center text-purple-200 text-sm mt-16">
          <p>© FreeHoroscopeNow.com | Built with ❤️ for the stars</p>
        </footer>
      </div>
    </>
  )
}

export default Blog

