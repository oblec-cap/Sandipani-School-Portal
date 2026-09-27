import campusImage from '@assets/25_1720438193668bcdb1edd3a_8dmo62_1790496916511.jpg';
import gatheringImage from '@assets/images_(2)_1790496916403.jpeg';
import communityImage from '@assets/images_(1)_1790496916559.jpeg';
import emblemImage from '@assets/images_1790496916603.jpeg';

export type Language = 'en' | 'hi';
export type Localized<T> = { en: T; hi: T };

export const images = { campus: campusImage, gathering: gatheringImage, community: communityImage, emblem: emblemImage };

export const navItems: Localized<Array<{ href: string; label: string }>> = {
  en: [
    { href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/academics', label: 'Academics' },
    { href: '/facilities', label: 'Facilities' }, { href: '/faculty', label: 'Faculty & staff' },
    { href: '/student-life', label: 'Student life' }, { href: '/events', label: 'Events' },
    { href: '/notices', label: 'Notices' }, { href: '/achievements', label: 'Achievements' },
    { href: '/gallery', label: 'Gallery' }, { href: '/contact', label: 'Contact' },
  ],
  hi: [
    { href: '/', label: 'होम' }, { href: '/about', label: 'हमारे बारे में' }, { href: '/academics', label: 'शैक्षणिक' },
    { href: '/facilities', label: 'सुविधाएँ' }, { href: '/faculty', label: 'फैकल्टी और स्टाफ' },
    { href: '/student-life', label: 'विद्यार्थी जीवन' }, { href: '/events', label: 'कार्यक्रम' },
    { href: '/notices', label: 'सूचनाएँ' }, { href: '/achievements', label: 'उपलब्धियाँ' },
    { href: '/gallery', label: 'गैलरी' }, { href: '/contact', label: 'संपर्क' },
  ],
};

export const siteCopy: Localized<{
  shortName: string; fullName: string; location: string; welcome: string; tagline: string;
  explore: string; admissions: string; contact: string; readMore: string; pending: string;
  schoolCommunity: string; schoolCommunityBody: string;
}> = {
  en: {
    shortName: 'Sandipani School', fullName: 'Government Sandipani Higher Secondary School',
    location: 'Damoh, Madhya Pradesh, India',
    welcome: 'A place to learn, belong and find your next step.',
    tagline: 'A government higher secondary school rooted in the everyday life of Damoh.',
    explore: 'Explore the school', admissions: 'Admissions', contact: 'Contact us', readMore: 'Read more',
    pending: 'Information to be updated', schoolCommunity: 'A school community in motion',
    schoolCommunityBody: 'From the courtyard to the classroom, school life is made of small moments that stay with us.',
  },
  hi: {
    shortName: 'सांदीपनि विद्यालय', fullName: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय',
    location: 'दमोह, मध्य प्रदेश, भारत',
    welcome: 'सीखने, जुड़ने और अपनी अगली दिशा खोजने की जगह।',
    tagline: 'दमोह के दैनिक जीवन से जुड़ा एक शासकीय उच्चतर माध्यमिक विद्यालय।',
    explore: 'विद्यालय देखें', admissions: 'प्रवेश', contact: 'संपर्क करें', readMore: 'और पढ़ें',
    pending: 'जानकारी शीघ्र अपडेट की जाएगी', schoolCommunity: 'चलता हुआ विद्यालय समुदाय',
    schoolCommunityBody: 'आंगन से कक्षा तक, विद्यालय जीवन उन छोटे पलों से बनता है जो हमेशा साथ रहते हैं।',
  },
};

export const pageContent: Localized<Record<string, {
  eyebrow: string; title: string; intro: string; sections?: Array<{ title: string; body: string; items?: string[]; image?: string }>;
}>> = {
  en: {
    about: {
      eyebrow: 'The school, at a glance', title: 'A familiar place with room to grow.',
      intro: 'Government Sandipani Higher Secondary School is a government school serving the learning community of Damoh, Madhya Pradesh. This website is a clear, welcoming starting point for students, families and teachers.',
      sections: [
        { title: 'Introduction', body: 'The school brings together learning, routine, friendships and the shared work of a school community. Official details are being gathered for publication here.' },
        { title: 'History', body: 'The school history and milestones are being compiled with the school community.', items: ['Information to be updated'] },
        { title: 'Vision & mission', body: 'To create a supportive learning environment where every learner can participate, ask questions and move forward with confidence.' },
        { title: 'Objectives', body: 'Learning foundations, thoughtful citizenship, regular attendance, respect for others and opportunities to discover strengths.', items: ['Learning with curiosity', 'Growing with responsibility', 'Making space for every voice'] },
        { title: 'Values', body: 'Respect · curiosity · care · effort · community' },
        { title: 'Principal’s message', body: 'The principal’s message will be published here after official confirmation.', items: ['Information to be updated'] },
      ],
    },
    academics: {
      eyebrow: 'Learning pathways', title: 'A clear path from first questions to next steps.',
      intro: 'The school’s academic journey spans primary foundations through higher secondary learning. Subject, stream and curriculum details will be updated from official school records.',
      sections: [
        { title: 'School stages', body: 'Learning across primary, middle, secondary and higher secondary stages.', items: ['Primary', 'Middle', 'Secondary', 'Higher secondary'] },
        { title: 'Subjects & streams', body: 'The school offers the following confirmed higher secondary streams. Subject combinations can be updated here as official details are added.', items: ['Maths', 'Biology', 'Commerce', 'Agriculture'] },
        { title: 'Curriculum & how we learn', body: 'The official curriculum is being confirmed. Classroom learning is supported by practical exploration, discussion and digital learning opportunities where available.' },
        { title: 'Guidance & exams', body: 'Career guidance, examination schedules and assessment information will be shared as official notices.' },
      ],
    },
    facilities: {
      eyebrow: 'Spaces for learning', title: 'The places that help school life happen.',
      intro: 'Facilities are listed as editable categories while official availability and details are confirmed. The campus photograph gives a sense of the school’s setting.',
      sections: [
        { title: 'Classrooms', body: 'Information to be updated' }, { title: 'Smart / digital classrooms', body: 'Information to be updated' },
        { title: 'Science laboratories', body: 'Information to be updated' }, { title: 'Physics lab', body: 'Information to be updated' },
        { title: 'Chemistry lab', body: 'Information to be updated' }, { title: 'Biology lab', body: 'Information to be updated' },
        { title: 'Computer / IT', body: 'Information to be updated' }, { title: 'Library', body: 'Information to be updated' },
        { title: 'STEM / innovation', body: 'Information to be updated' }, { title: 'Sports', body: 'Information to be updated' },
        { title: 'Arts & music', body: 'Information to be updated' }, { title: 'Campus infrastructure', body: 'Information to be updated' },
      ],
    },
    faculty: {
      eyebrow: 'The people behind the day', title: 'A directory that will grow with the school.',
      intro: 'We will publish the official faculty and staff directory here only after names, roles and categories are confirmed. No unverified names are shown.',
      sections: [
        { title: 'Principal', body: 'Information to be updated' }, { title: 'Primary teachers', body: 'Information to be updated' },
        { title: 'Middle school teachers', body: 'Information to be updated' }, { title: 'Secondary teachers', body: 'Information to be updated' },
        { title: 'Higher secondary teachers', body: 'Information to be updated' }, { title: 'Sports', body: 'Information to be updated' },
        { title: 'Arts / music', body: 'Information to be updated' }, { title: 'IT / technical', body: 'Information to be updated' },
        { title: 'Administrative staff', body: 'Information to be updated' }, { title: 'Support staff', body: 'Information to be updated' },
      ],
    },
    admissions: {
      eyebrow: 'Join the community', title: 'Start with the right information.',
      intro: 'Admissions information is being prepared for families. Please use the enquiry form for a question and check official school notices for confirmed updates.',
      sections: [
        { title: 'Overview', body: 'Information to be updated' }, { title: 'Classes & eligibility', body: 'Information to be updated' },
        { title: 'Process & documents', body: 'Information to be updated', items: ['Information to be updated'] },
        { title: 'Important dates', body: 'Information to be updated' }, { title: 'Frequently asked questions', body: 'Information to be updated' },
      ],
    },
    'student-life': {
      eyebrow: 'Beyond the timetable', title: 'The school day is more than a lesson.',
      intro: 'Student life is built through friendships, shared responsibilities, assemblies, activities and the everyday energy of the campus.',
      sections: [
        { title: 'Sports', body: 'Information to be updated' }, { title: 'Cultural activities', body: 'Information to be updated' },
        { title: 'Arts & music', body: 'Information to be updated' }, { title: 'Science activities', body: 'Information to be updated' },
        { title: 'Competitions', body: 'Information to be updated' }, { title: 'Clubs', body: 'Information to be updated' },
        { title: 'Student leadership', body: 'Information to be updated' }, { title: 'School celebrations', body: 'Information to be updated' },
        { title: 'Educational trips', body: 'Information to be updated' }, { title: 'Community activities', body: 'Information to be updated' },
      ],
    },
    events: {
      eyebrow: 'The school calendar', title: 'Gatherings, learning and shared moments.',
      intro: 'Confirmed school events will appear here. Until the official calendar is published, this page stays intentionally honest.',
    },
    notices: {
      eyebrow: 'Keep in the loop', title: 'Important information, in one place.',
      intro: 'Official notices, circulars and updates will be added here as they are released by the school.',
    },
    achievements: {
      eyebrow: 'Recognising progress', title: 'Every step forward matters.',
      intro: 'Achievements will be shared here only when confirmed by the school. This keeps the record useful, respectful and accurate.',
      sections: [
        { title: 'Academic achievements', body: 'Information to be updated' }, { title: 'Board results', body: 'Information to be updated' },
        { title: 'Sports achievements', body: 'Information to be updated' }, { title: 'Cultural achievements', body: 'Information to be updated' },
        { title: 'Science / innovation', body: 'Information to be updated' }, { title: 'Competitions & awards', body: 'Information to be updated' },
        { title: 'Student achievements', body: 'Information to be updated' },
      ],
    },
    gallery: {
      eyebrow: 'See school life', title: 'A small window into the campus.',
      intro: 'These supplied photographs are the authentic starting archive for the school website. More official images can be added over time.',
    },
    contact: {
      eyebrow: 'Find your way here', title: 'The school is part of Damoh.',
      intro: 'Government Sandipani Higher Secondary School is in Damoh, Madhya Pradesh, India. Contact details and directions will be updated after official confirmation.',
      sections: [
        { title: 'Address', body: 'Damoh, Madhya Pradesh, India' }, { title: 'Phone & email', body: 'Information to be updated' },
        { title: 'Office hours', body: 'Information to be updated' },
      ],
    },
  },
  hi: {
    about: {
      eyebrow: 'विद्यालय एक नज़र में', title: 'अपनापन और आगे बढ़ने की जगह।',
      intro: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय दमोह, मध्य प्रदेश के शिक्षण समुदाय की सेवा करने वाला शासकीय विद्यालय है। यह वेबसाइट विद्यार्थियों, परिवारों और शिक्षकों के लिए एक स्पष्ट और स्वागतपूर्ण शुरुआत है।',
      sections: [
        { title: 'परिचय', body: 'विद्यालय सीखने, दिनचर्या, मित्रता और साझा जिम्मेदारियों को एक साथ लाता है। आधिकारिक विवरण यहाँ प्रकाशित करने के लिए संकलित किए जा रहे हैं।' },
        { title: 'इतिहास', body: 'विद्यालय के इतिहास और महत्वपूर्ण पड़ावों को विद्यालय समुदाय के साथ संकलित किया जा रहा है।', items: ['जानकारी शीघ्र अपडेट की जाएगी'] },
        { title: 'दृष्टि और उद्देश्य', body: 'ऐसा सहयोगी वातावरण बनाना जहाँ हर विद्यार्थी भाग ले, प्रश्न पूछे और विश्वास के साथ आगे बढ़े।' },
        { title: 'लक्ष्य', body: 'मजबूत सीखने की नींव, जिम्मेदार नागरिकता, नियमित उपस्थिति, सम्मान और अपनी क्षमताएँ खोजने के अवसर।', items: ['जिज्ञासा के साथ सीखना', 'जिम्मेदारी के साथ बढ़ना', 'हर आवाज़ के लिए जगह'] },
        { title: 'मूल्य', body: 'सम्मान · जिज्ञासा · देखभाल · प्रयास · समुदाय' },
        { title: 'प्राचार्य का संदेश', body: 'आधिकारिक पुष्टि के बाद प्राचार्य का संदेश यहाँ प्रकाशित किया जाएगा।', items: ['जानकारी शीघ्र अपडेट की जाएगी'] },
      ],
    },
     academics: { eyebrow: 'सीखने की राह', title: 'पहले प्रश्नों से अगले कदम तक स्पष्ट राह।', intro: 'विद्यालय की शैक्षणिक यात्रा प्राथमिक नींव से उच्चतर माध्यमिक अध्ययन तक जाती है। विषय और पाठ्यक्रम का विवरण आधिकारिक अभिलेखों से अपडेट किया जाएगा।', sections: [{ title: 'विद्यालय के चरण', body: 'प्राथमिक, माध्यमिक और उच्चतर माध्यमिक स्तर पर सीखना।', items: ['प्राथमिक', 'मिडिल', 'माध्यमिक', 'उच्चतर माध्यमिक'] }, { title: 'विषय और स्ट्रीम', body: 'विद्यालय में निम्नलिखित उच्चतर माध्यमिक स्ट्रीम उपलब्ध हैं। विषय संयोजन की आधिकारिक जानकारी बाद में जोड़ी जा सकती है।', items: ['गणित', 'जीवविज्ञान', 'वाणिज्य', 'कृषि'] }, { title: 'पाठ्यक्रम और सीखने का तरीका', body: 'आधिकारिक पाठ्यक्रम की पुष्टि की जा रही है। कक्षा शिक्षण को व्यावहारिक खोज, चर्चा और उपलब्ध डिजिटल अवसरों का सहयोग मिलता है।' }, { title: 'मार्गदर्शन और परीक्षाएँ', body: 'करियर मार्गदर्शन, परीक्षा कार्यक्रम और मूल्यांकन की जानकारी आधिकारिक सूचनाओं के रूप में साझा की जाएगी।' }] },
     facilities: { eyebrow: 'सीखने के स्थान', title: 'वे स्थान जहाँ विद्यालय जीवन बनता है।', intro: 'आधिकारिक उपलब्धता और विवरण की पुष्टि होने तक सुविधाओं को संपादन योग्य श्रेणियों के रूप में दिखाया गया है।', sections: [{ title: 'कक्षाएँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'स्मार्ट / डिजिटल कक्षाएँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विज्ञान प्रयोगशालाएँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'भौतिकी प्रयोगशाला', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'रसायन प्रयोगशाला', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'जीवविज्ञान प्रयोगशाला', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कंप्यूटर / आईटी', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'पुस्तकालय', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'STEM / नवाचार', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'खेल', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कला और संगीत', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'परिसर की आधारभूत संरचना', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
     faculty: { eyebrow: 'विद्यालय के लोग', title: 'एक निर्देशिका जो विद्यालय के साथ बढ़ेगी।', intro: 'नाम, भूमिका और श्रेणियाँ आधिकारिक रूप से पुष्टि होने के बाद ही यहाँ प्रकाशित की जाएँगी।', sections: [{ title: 'प्राचार्य', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'प्राथमिक शिक्षक', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'मिडिल स्कूल शिक्षक', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'माध्यमिक शिक्षक', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'उच्चतर माध्यमिक शिक्षक', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'खेल', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कला / संगीत', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'आईटी / तकनीकी', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'प्रशासनिक स्टाफ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'सहायक स्टाफ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
    admissions: { eyebrow: 'समुदाय से जुड़ें', title: 'सही जानकारी से शुरुआत करें।', intro: 'परिवारों के लिए प्रवेश संबंधी जानकारी तैयार की जा रही है। प्रश्न के लिए पूछताछ फॉर्म का उपयोग करें और आधिकारिक सूचनाएँ देखें।', sections: [{ title: 'परिचय', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कक्षाएँ और पात्रता', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'प्रक्रिया और दस्तावेज़', body: 'जानकारी शीघ्र अपडेट की जाएगी', items: ['जानकारी शीघ्र अपडेट की जाएगी'] }, { title: 'महत्वपूर्ण तिथियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'सामान्य प्रश्न', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
     'student-life': { eyebrow: 'समय-सारणी से आगे', title: 'विद्यालय का दिन केवल पाठ नहीं है।', intro: 'विद्यार्थी जीवन मित्रता, साझा जिम्मेदारियों, प्रार्थना सभा, गतिविधियों और परिसर की रोज़मर्रा ऊर्जा से बनता है।', sections: [{ title: 'खेल', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'सांस्कृतिक गतिविधियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कला और संगीत', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विज्ञान गतिविधियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'प्रतियोगिताएँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'क्लब', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विद्यार्थी नेतृत्व', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विद्यालय समारोह', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'शैक्षणिक यात्राएँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'सामुदायिक गतिविधियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
    events: { eyebrow: 'विद्यालय कैलेंडर', title: 'मिलना, सीखना और साझा पल।', intro: 'पुष्ट विद्यालय कार्यक्रम यहाँ दिखाई देंगे। आधिकारिक कैलेंडर प्रकाशित होने तक यह पृष्ठ ईमानदारी से खाली रखा गया है।' },
    notices: { eyebrow: 'जानकारी से जुड़े रहें', title: 'महत्वपूर्ण जानकारी, एक जगह।', intro: 'विद्यालय द्वारा जारी आधिकारिक सूचनाएँ, परिपत्र और अपडेट यहाँ जोड़े जाएँगे।' },
     achievements: { eyebrow: 'प्रगति का सम्मान', title: 'हर आगे बढ़ता कदम महत्वपूर्ण है।', intro: 'विद्यालय से पुष्टि होने के बाद ही उपलब्धियाँ साझा की जाएँगी।', sections: [{ title: 'शैक्षणिक उपलब्धियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'बोर्ड परिणाम', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'खेल उपलब्धियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'सांस्कृतिक उपलब्धियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विज्ञान / नवाचार', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'प्रतियोगिताएँ और पुरस्कार', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'विद्यार्थी उपलब्धियाँ', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
    gallery: { eyebrow: 'विद्यालय जीवन देखें', title: 'परिसर की एक छोटी झलक।', intro: 'ये उपलब्ध कराए गए प्रामाणिक फोटो विद्यालय वेबसाइट का प्रारंभिक संग्रह हैं। समय के साथ और आधिकारिक फोटो जोड़े जा सकते हैं।' },
    contact: { eyebrow: 'यहाँ पहुँचें', title: 'विद्यालय दमोह का हिस्सा है।', intro: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय दमोह, मध्य प्रदेश, भारत में है। संपर्क विवरण और दिशा-निर्देश आधिकारिक पुष्टि के बाद अपडेट किए जाएँगे।', sections: [{ title: 'पता', body: 'दमोह, मध्य प्रदेश, भारत' }, { title: 'फोन और ईमेल', body: 'जानकारी शीघ्र अपडेट की जाएगी' }, { title: 'कार्यालय समय', body: 'जानकारी शीघ्र अपडेट की जाएगी' }] },
  },
};

export const galleryItems = [
  { id: 'campus', title: { en: 'The school building', hi: 'विद्यालय भवन' }, category: { en: 'Campus', hi: 'परिसर' }, src: campusImage },
  { id: 'gathering', title: { en: 'Students together', hi: 'साथ-साथ विद्यार्थी' }, category: { en: 'Community', hi: 'समुदाय' }, src: gatheringImage },
  { id: 'community', title: { en: 'A school welcome', hi: 'विद्यालय का स्वागत' }, category: { en: 'Community', hi: 'समुदाय' }, src: communityImage },
];

export const pageMeta: Record<string, Localized<{ title: string; description: string }>> = {
  home: { en: { title: 'Government Sandipani Higher Secondary School | Damoh', description: 'The welcoming school community of Government Sandipani Higher Secondary School, Damoh.' }, hi: { title: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय | दमोह', description: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय, दमोह का विद्यालय समुदाय।' } },
  about: { en: { title: 'About the School | Sandipani School', description: 'Learn about Government Sandipani Higher Secondary School in Damoh.' }, hi: { title: 'विद्यालय के बारे में | सांदीपनि विद्यालय', description: 'दमोह के शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय के बारे में।' } },
  academics: { en: { title: 'Academics | Sandipani School', description: 'Explore learning stages and academic information.' }, hi: { title: 'शैक्षणिक | सांदीपनि विद्यालय', description: 'सीखने के चरण और शैक्षणिक जानकारी।' } },
  facilities: { en: { title: 'Facilities | Sandipani School', description: 'Spaces and facilities supporting school life.' }, hi: { title: 'सुविधाएँ | सांदीपनि विद्यालय', description: 'विद्यालय जीवन का सहयोग करने वाले स्थान और सुविधाएँ।' } },
  faculty: { en: { title: 'Faculty & Staff | Sandipani School', description: 'Official faculty and staff information.' }, hi: { title: 'फैकल्टी और स्टाफ | सांदीपनि विद्यालय', description: 'फैकल्टी और स्टाफ की आधिकारिक जानकारी।' } },
  admissions: { en: { title: 'Admissions | Sandipani School', description: 'Admission information and enquiry form.' }, hi: { title: 'प्रवेश | सांदीपनि विद्यालय', description: 'प्रवेश जानकारी और पूछताछ फॉर्म।' } },
  'student-life': { en: { title: 'Student Life | Sandipani School', description: 'Discover student life beyond the timetable.' }, hi: { title: 'विद्यार्थी जीवन | सांदीपनि विद्यालय', description: 'समय-सारणी से आगे विद्यार्थी जीवन।' } },
  events: { en: { title: 'Events | Sandipani School', description: 'Confirmed events from the school calendar.' }, hi: { title: 'कार्यक्रम | सांदीपनि विद्यालय', description: 'विद्यालय कैलेंडर के पुष्ट कार्यक्रम।' } },
  notices: { en: { title: 'Notices | Sandipani School', description: 'Official school notices and updates.' }, hi: { title: 'सूचनाएँ | सांदीपनि विद्यालय', description: 'विद्यालय की आधिकारिक सूचनाएँ और अपडेट।' } },
  achievements: { en: { title: 'Achievements | Sandipani School', description: 'A respectful record of school achievements.' }, hi: { title: 'उपलब्धियाँ | सांदीपनि विद्यालय', description: 'विद्यालय की उपलब्धियों का रिकॉर्ड।' } },
  gallery: { en: { title: 'Gallery | Sandipani School', description: 'Photographs from the school campus and community.' }, hi: { title: 'गैलरी | सांदीपनि विद्यालय', description: 'विद्यालय परिसर और समुदाय के फोटो।' } },
  contact: { en: { title: 'Contact | Sandipani School', description: 'Find and contact Government Sandipani Higher Secondary School.' }, hi: { title: 'संपर्क | सांदीपनि विद्यालय', description: 'शासकीय सांदीपनि उच्चतर माध्यमिक विद्यालय से संपर्क।' } },
};