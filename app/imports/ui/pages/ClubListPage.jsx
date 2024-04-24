import React from 'react';

const ClubListPage = () => {
  const clubNames = [
    '8bit (8 Business Information & Technology)',
    'Accounting Club',
    'Advocates for Public Interest Law',
    'Addiction Medicine & Harm Reduction Interest Group',
    'AECT- Hawaii at Manoa (AECT-HI)',
    'Aikido at UHM',
    'Alpha Omega Hawaii',
    'Alpha Sigma Phi',
    'Alpha Gamma Delta Delta Sigma',
    'Alohathon',
    'American Association of University Women at the University of Hawaiʻi at Mānoa',
    'American Hotel & Lodging Association [AHLA]',
    'American Institute of Aeronautics and Astronautics Student Branch at the University of Hawai\'i at Manoa',
    'American Institute of Graphic Arts at the University of Hawai\'i at Manoa (AIGA UHM)',
    'American Marketing Association at the University of Hawaii at Manoa',
    'American Medical Association/Hawaii Medical Association Branch at JABSOM',
    'American Society of Heating, Refrigerating and Air-Conditioning Engineers',
    'American Society of Civil Engineers',
    'American Institute of Architects Students Hawaii Chapter',
    'American Library Association Student Chapter',
    'Anakbayan Hawai‘i',
    'Anthropology Undergraduate Student Association',
    'Anime Manga Society of Hawai`i @ UH Manoa',
    'Animal Science Club at UH Manoa',
    'Asian-Pacific Law & Policy Journal',
    'Associated Students of the John A. Burns School of Medicine',
    'Association for Computing Machinery at the University of Hawaii at Manoa',
    'ASD Student Group',
    'Atherton YMCA',
    'Aquaholics Scuba Club',
    'Baptist Collegiate Ministries O\'ahu',
    'Bachelor of Social Work Organizations',
    'Ballroom Dance Club @UH',
    'Black Student Association',
    'Be the Match',
    'Best Buddies Chapter at UHM',
    'Beta Alpha Psi - Delta Theta Chapter',
    'Beta Beta Gamma',
    'Botanical Society of America Hawaii Chapter at Univeristy of Hawaii at Manoa',
    'Business Executive Society of Tomorrow',
    'Capoeira Senzala Hawaii',
    'Campus Chinese Christian Ministry',
    'Chess Club at UH Manoa',
    'Chi Alpha Hawaii',
    'Chi Epsilon',
    'Church in Honolulu',
    'Circle K International at the University of Hawaii at Manoa',
    'Class of 2026 at JABSOM',
    'Class of 2027 at JABSOM',
    'Clay Club',
    'Club Management Association of America',
    'CRU',
    'Climbing Club at UHM',
    'Class of 2024 at JABSOM',
    'Coalition To Stop Hunger',
    'Collegiate Association for the Research of Principle (CARP)',
    'C.O.P. Alaka\'ina',
    'CTAHR Student Ambassadors',
    'Cycle Manoa',
    'Delta Sigma Pi: Rho Chi',
    'Disability in Medicine Interest Group',
    'Drone Technologies at the University of Hawaii',
    'E1R1 Street Dance Club',
    'East-West Toastmasters',
    'End Overdose Hawaii',
    'Engineers\' Council at the University of Hawaiʻi',
    'Eta Sigma Delta',
    'Eta Kappa Nu',
    'Every Nation Campus',
    'Every Nation Campus Honolulu',
    'Family Medicine Interest Group',
    'FilGrad',
    'Filipino Law Students Association',
    'Financial Management Association',
    'Food Science and Human Nutrition Council',
    'Friends of the Family',
    'Grey Hats',
    'Glass Art Family',
    'Geography Club at UH Manoa',
    'Graduate Business Student Association',
    'Graduate Arts Council',
    'Graduate Women in Science Hawai\'i',
    'Hawai‘i Educational Research Association',
    'Hawai\'i Student Entrepreneurs',
    'Hawai\'i Undergraduate Initiative',
    'Hawaii Sigma Pi',
    'Hawaii Women Lawyers Student Organization',
    'HOSA (Health Occupations Students of America)',
    'HONU SCIENTISTS',
    'Hillel Hawaii',
    'Hui Dui',
    'Hui Ola Pono',
    'Hui Kākoʻo: Social Work Graduate Student Organization',
    'ICSpark',
    'ʻIlima SACNAS Chapter at University of Hawaiʻi',
    'Indigenous Student Association',
    'International Business Organization',
    'International Student Association',
    'Internal Medicine Interest Group',
    'Intervarsity Christian Fellowship',
    'Information Technology Management Association',
    'Institute of Electrical and Electronics Engineers Student Branch',
    'Institute of Transportation Engineers',
    'IMUA Scholarly Society for Epistemic Innovation, Integral Studies, and Transformational Research',
    'Japanese Culture Club',
    'Judo Team/Club at University of Hawaii at Manoa',
    'Jehovah\'s Witnesses',
    'Ka Mea Kolo Entomology Club',
    'Ka Lau O Ka Lāhui',
    'Katipunan Club',
    'Keebs at UHM',
    'Kim\'s Taekwon Do at UHM',
    'Kizomba 808',
    'KRS Club',
    'Lambda Law Hawaii',
    'Linguistic Society of Mānoa',
    'LIFE (Love Is For Everyone)',
    'Manoa Scholars Club',
    'Manoa Economics Association',
    'Manoa Student Ambassadors',
    'Manoa Academy of Gamers',
    'Medical Student Mentorship Program',
    'Medical Students for a Sustainable Future (MS4SF)',
    'Medical Student Pride Alliance',
    'Medical Education Student Interest Group',
    'Mortar Board National Honor Society Hui Po\'okela Chapter at the University Of Hawaiʻi at Mānoa',
    'Molecular Cell Biology Club at UH Manoa',
    'Moʻui Maʻa Tonga at UH at Manoa',
    'Moku o Loe Student Association',
    'Midshipman Association',
    'Muslim Student Association at UHM',
    'Multi\'olelo',
    'Na Koa Lani Booster Club',
    'Nā Hawaiʻi ʻImi Loa Hui Haumāna',
    'National Residence Hall Honorary',
    'Natural Resources and Environmental Management Graduate Student Organization at University of Hawaiʻi at Mānoa',
    'Natural Sciences Student Ambassadors',
    'Newman Club',
    'NSSLHA - Hui Pua Naleo',
    'Oncology Interest Group',
    'Ophthalmology Interest Group',
    'Open Debate Society',
    'Osu! Club @ UH Manoa',
    'Pacific Asian Travel Association',
    'Panhellenic Association',
    'Pan Pacific Association',
    'Partnership for Social Justice',
    'Pasifika Allies Association',
    'Patient Safety and Quality Improvement Interest Group',
    'Pediatric Interest Group',
    'Peace Sustainability and Advocacy',
    'Peer Mentor Ohana',
    'Phi Alpha Nu Sigma',
    'Phi Mu Fraternity',
    'Phi Alpha Theta - Alpha Beta Epsilon',
    'Pi Gamma Mu',
    'Pickleball Club at UHM',
    'PsiChi (Psychology International Honor Society)',
    'Psi Sigma: The Psychology Connection',
    'Powerlifting Club at the University of Hawaii at Manoa',
    'Pre-Pharmacy Association',
    'Pre-Medical Association at the University of Hawai\'i at Manoa',
    'Pre-Optometry Club',
    'Pre-Physician Associate Club',
    'Pre-Vet Club at UH Manoa',
    'Pre-Dental Association at the University of Hawaii at Manoa',
    'Public Relations Student Society of America - UH Mānoa',
    'Public Administration Student Organization at the University of Hawai‘i at Mānoa',
    'Real Estate Club at the University of Hawaii',
    'Regents and Presidential Scholars (RAPS) Club',
    'Reformed University Fellowship',
    'Rotaract Club at the University of Hawaiʻi at Mānoa',
    'Salsa Dancing at UHM',
    'School of Cinematic Arts Student Association',
    'Second Language Studies Student Association',
    'SEƐD (STEAM. Exploration. 3D. Design.)',
    'Society of Women Engineers',
    'Society for Human Resource Management Aloha Chapter',
    'Sports Medicine Interest Group',
    'Sigma Theta Tau at UHM',
    'SimTiki Student Interest Group',
    'Sister Circle at Manoa',
    'Society of American Archivists Student Chapter',
    'Stole Society',
    'Student Animal Legal Defense Fund',
    'Students Interested in Pathology Group',
    'Student Nurses\' Association at UH Manoa',
    'Student Chapter of the American Society of Landscape Architects (SCASLA)',
    'Student Veterans of America at the University of Hawai\'i at Manoa',
    'Surfrider Foundation at the University of Hawaii at Manoa',
    'Surgery Interest Group',
    'SWITCH: Supporting Women in Technology and Computing Hawaii',
    'Taiwanese Student Organization',
    'The Student Subunit of the Pacific Islands Chapter of the American Fisheries Society at the University of Hawai\'i',
    'The Association for Language, Culture, and Professional Development at UH Manoa',
    'The Art Club at UHM',
    'The Aloha Chapter of the American Meteorological Society',
    'The Navigators',
    'The Way of Tea Club at the University of Hawaiʻi at Manoa',
    'Timpuyog Organization',
    'Tropical Plant and Soil Sciences Graduate Student Organization at the University of Hawai‘i at Mānoa',
    'Tides Council',
    'Transcendental Meditation Club',
    'Travel Industry Management Student Association (TIMSA)',
    'Trial By Fire Academy',
    'Ultrasound Interest Group (USIG)',
    'UNA-USA at UH Manoa',
    'Undergraduate Philosophy Student Association',
    'University Students of Urban and Regional Planning',
    'Volunteers for Intercultural and Definitive Adventures',
    'Waiʻānapanapa',
    'Walks for ALOHA at JABSOM',
    'Well R(ea)d',
    'Wellness Warriors',
    'Whining & Dining Club',
    'World Can\'t Wait Hawai’i',
    'Women in Surgery Interest Group',
    'Young Skal',
  ];

  // Function to split long club names into multiple lines
  const splitLongName = (name) => {
    const maxLength = 64;
    if (name.length > maxLength) {
      const words = name.split(' ');
      let currentLine = '';
      const lines = words.reduce((acc, word) => {
        if ((currentLine + word).length > maxLength) {
          acc.push(currentLine);
          currentLine = '';
        }
        currentLine += (currentLine ? ' ' : '') + word;
        return acc;
      }, []);
      lines.push(currentLine);
      return lines.map((line, index) => <span key={index}>{line}<br /></span>);
    }
    return name;
  };

  // Function to render club list in two columns
  const renderClubList = () => {
    const halfway = Math.ceil(clubNames.length / 2);
    const firstColumn = clubNames.slice(0, halfway);
    const secondColumn = clubNames.slice(halfway);
    const maxColumnHeight = Math.max(firstColumn.length, secondColumn.length);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1cm' }}>
        <div style={{ marginRight: '0.5in' }}>
          <ul style={{ listStyleType: 'disc', padding: 0 }}>
            {firstColumn.map((name, index) => (
              <li key={index} style={{ textAlign: 'left' }}>{splitLongName(name)}</li>
            ))}
            {/* Add empty items to make both columns the same height */}
            {Array(maxColumnHeight - firstColumn.length).fill().map((_, index) => (
              <li key={`empty-${index}`} style={{ visibility: 'hidden' }}>&nbsp;</li>
            ))}
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: 'disc', padding: 0 }}>
            {secondColumn.map((name, index) => (
              <li key={index + halfway} style={{ textAlign: 'left' }}>{splitLongName(name)}</li>
            ))}
            {/* Add empty items to make both columns the same height */}
            {Array(maxColumnHeight - secondColumn.length).fill().map((_, index) => (
              <li key={`empty-${index}`} style={{ visibility: 'hidden' }}>&nbsp;</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>List of all the clubs (A-Z):</h1>
      {renderClubList()}
    </div>
  );
};

export default ClubListPage;
