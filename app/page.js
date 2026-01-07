'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('org');
  const [contactFilter, setContactFilter] = useState('cardswitcher');
  const [expanded, setExpanded] = useState({
    ceo: true,
    ryan: true,
    philip: true,
    brenden: true,
    baishi: true,
    will: true
  });

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  // LinkedIn icon
  const LinkedInIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0a66c2">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  // Avatar component
  const Avatar = ({ name, size = 56, isPrimary = false, isInterim = false }) => {
    const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: isPrimary ? '#10b981' : '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.35,
          fontWeight: 600,
          color: isPrimary ? '#fff' : '#4b5563',
          border: '2px solid #fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          {initials}
        </div>
        {isInterim && (
          <div style={{
            position: 'absolute',
            top: -2,
            right: -2,
            background: '#f59e0b',
            color: '#fff',
            fontSize: 7,
            fontWeight: 700,
            padding: '2px 4px',
            borderRadius: 3
          }}>INT</div>
        )}
      </div>
    );
  };

  // LinkedIn button
  const LinkedInBtn = ({ url }) => {
    if (!url) return null;
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    return (
      <a 
        href={fullUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 3,
          background: '#0a66c2',
          color: '#fff',
          padding: '3px 8px',
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 500,
          textDecoration: 'none',
          marginTop: 4
        }}
      >
        <LinkedInIcon size={10} />
        <span style={{ color: '#fff' }}>LinkedIn</span>
      </a>
    );
  };

  // Expand button
  const ExpandBtn = ({ count, isExpanded, onClick }) => (
    <button onClick={onClick} style={{
      background: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: '3px 8px',
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      marginTop: 6
    }}>
      {count}<span style={{ fontSize: 8 }}>{isExpanded ? '▲' : '▼'}</span>
    </button>
  );

  // Person card
  const PersonCard = ({ name, role, email, linkedin, count, isExpanded, onToggle, isPrimary, isInterim }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 120 }}>
      <Avatar name={name} isPrimary={isPrimary} isInterim={isInterim} />
      <div style={{ marginTop: 8, textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>{name}</div>
        <div style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>{role}</div>
        <LinkedInBtn url={linkedin} />
      </div>
      {count > 0 && <ExpandBtn count={count} isExpanded={isExpanded} onClick={onToggle} />}
    </div>
  );

  // Squad card
  const SquadCard = ({ squad, pm, pmLinkedin, em, emLinkedin, isPrimary, email }) => (
    <div style={{
      background: isPrimary ? '#f0fdf4' : '#fff',
      border: `1px solid ${isPrimary ? '#86efac' : '#e5e7eb'}`,
      borderRadius: 10,
      padding: 14,
      width: 170
    }}>
      <div style={{ fontSize: 9, fontWeight: 600, color: '#6b7280', marginBottom: 10, letterSpacing: 0.5, textAlign: 'center' }}>
        {squad.toUpperCase()}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name={pm} size={44} isPrimary={isPrimary} />
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{pm}</div>
          <div style={{ fontSize: 10, color: '#6b7280' }}>Product Manager</div>
          {email && <div style={{ fontSize: 8, color: '#9ca3af', marginTop: 2 }}>{email}</div>}
          <LinkedInBtn url={pmLinkedin} />
        </div>
      </div>
      {em && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Avatar name={em} size={28} />
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#374151' }}>{em}</div>
            <div style={{ fontSize: 9, color: '#6b7280' }}>Eng Manager</div>
            {emLinkedin && (
              <a 
                href={emLinkedin.startsWith('http') ? emLinkedin : `https://${emLinkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: 9, color: '#0a66c2', textDecoration: 'none' }}
              >
                LinkedIn →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Section label
  const SectionLabel = ({ children, color = '#6b7280' }) => (
    <div style={{
      fontSize: 10,
      fontWeight: 600,
      color,
      letterSpacing: 1,
      textTransform: 'uppercase',
      margin: '28px 0 16px',
      textAlign: 'center'
    }}>{children}</div>
  );

  // C-Suite card
  const CSuiteCard = ({ name, role, linkedin }) => (
    <div style={{ textAlign: 'center', width: 100 }}>
      <Avatar name={name} size={44} />
      <div style={{ fontSize: 11, fontWeight: 600, color: '#111827', marginTop: 6 }}>{name}</div>
      <div style={{ fontSize: 9, color: '#6b7280' }}>{role}</div>
      {linkedin && (
        <a 
          href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            fontSize: 9, 
            color: '#0a66c2', 
            textDecoration: 'none',
            marginTop: 4
          }}
        >
          <LinkedInIcon size={10} />
          Profile
        </a>
      )}
    </div>
  );

  // All people data
  const allPeople = [
    { name: 'Chris Britt', role: 'CEO & Co-Founder', team: 'Executive Leadership', email: 'cb@chime.com', linkedin: 'https://www.linkedin.com/in/cbritt', cardswitcher: false },
    { name: 'Ryan King', role: 'Co-Founder & Interim CPO', team: 'Executive Leadership', email: 'rk@chime.com', linkedin: 'https://www.linkedin.com/in/ryanaking', cardswitcher: false },
    { name: 'Mark Troughton', role: 'President', team: 'Executive Leadership', email: 'mtroughton@chime.com', linkedin: 'https://www.linkedin.com/in/matroughton', cardswitcher: false },
    { name: 'Janelle Sallenave', role: 'COO', team: 'Executive Leadership', email: 'janelle.sallenave@chime.com', linkedin: 'https://www.linkedin.com/in/janelle-sallenave-489416', cardswitcher: false },
    { name: 'Matt Newcomb', role: 'CFO', team: 'Executive Leadership', email: 'matt@chimebank.com', linkedin: 'https://www.linkedin.com/in/matthewsnewcomb', cardswitcher: false },
    { name: 'Jeff Currier', role: 'CTO', team: 'Executive Leadership', email: 'jcurrier@chime.com', linkedin: 'https://www.linkedin.com/in/jeff-currier', cardswitcher: false },
    { name: 'Vineet Mehra', role: 'CGO', team: 'Executive Leadership', email: 'vineet.mehra@chime.com', linkedin: 'https://www.linkedin.com/in/vineetmehra1', cardswitcher: false },
    { name: 'Sarah Wagener', role: 'Chief People Officer', team: 'Executive Leadership', email: 'sarah.wagener@chime.com', linkedin: 'linkedin.com/in/sarah-collins-wagener', cardswitcher: false },
    { name: 'Adam Frankel', role: 'General Counsel', team: 'Executive Leadership', email: 'adam.frankel@chime.com', linkedin: 'https://linkedin.com/in/adam-spencer-frankel-2ba72616', cardswitcher: false },
    { name: 'Xiongwen Rui', role: 'Chief Risk Officer', team: 'Executive Leadership', email: 'xiongwen.rui@chime.com', linkedin: 'https://www.linkedin.com/in/xiongwenrui', cardswitcher: false },
    { name: 'Jennifer Kuperman', role: 'Chief Corporate Affairs', team: 'Executive Leadership', email: 'jennifer.kuperman@chime.com', linkedin: 'linkedin.com/in/jenniferkuperman', cardswitcher: false },
    { name: 'Barkha Saxena', role: 'Chief Data Officer', team: 'Executive Leadership', email: 'barkha.saxena@chime.com', linkedin: 'https://www.linkedin.com/in/barkhasaxena', cardswitcher: false },
    { name: 'Philip McDonnell', role: 'VP Product (Spending)', team: 'Banking Products', email: 'philip.mcdonnell@chime.com', linkedin: 'https://www.linkedin.com/in/philipmcdonnell', cardswitcher: true },
    { name: 'Michael Barrett', role: 'Engineering Lead', team: 'Banking Products', email: 'michael.barrett@chime.com', linkedin: 'https://www.linkedin.com/in/michaelebarrett', cardswitcher: false },
    { name: 'Will Wix', role: 'Product Operations', team: 'Product Operations', email: 'will@chimebank.com', linkedin: 'https://www.linkedin.com/in/will-wix-5846b68b', cardswitcher: true },
    { name: 'Priya Raghuram', role: 'Engineering Management', team: 'Engineering', email: 'pr@chimebank.com', linkedin: 'linkedin.com/in/the-priya-raghuram', cardswitcher: false },
    { name: 'Jake Ford', role: 'OMX', team: 'Banking Products', email: 'jake.ford@chime.com', linkedin: 'linkedin.com/in/jacobford44', cardswitcher: false },
    { name: 'Caylee Betts', role: 'Design', team: 'Design', email: 'caylee.betts@chime.com', linkedin: 'https://www.linkedin.com/in/cayleebetts', cardswitcher: false },
    { name: 'Jon Moffitt', role: 'Marketing', team: 'Marketing', email: 'jon.moffitt@chime.com', linkedin: 'https://linkedin.com/in/jonmoffitt', cardswitcher: false },
    { name: 'Jeannie DeLoach', role: 'User Research', team: 'Design', email: 'jeannie.deloach@chime.com', linkedin: 'https://www.linkedin.com/in/jeandeloach', cardswitcher: false },
    { name: 'Jaclyn Dinh', role: 'Analytics', team: 'Analytics', email: 'jaclyn.dinh@chime.com', linkedin: 'https://www.linkedin.com/in/jchaunguyen', cardswitcher: false },
    { name: 'Brenden', role: 'GPM/PM Director, Spend Better', team: 'Spend Better', email: '', linkedin: '', cardswitcher: true },
    { name: 'Baishi Wu', role: 'GPM/PM Director, Cards', team: 'Cards', email: 'bwu@chime.com', linkedin: 'https://www.linkedin.com/in/baishi', cardswitcher: false },
    { name: 'Katherine Cheng', role: 'PM, Spending Intelligence', team: 'Spend Better', email: 'katherine@chime.com', linkedin: 'https://www.linkedin.com/in/katherine-cheng-82246258', cardswitcher: true, isPrimary: true },
    { name: 'William Stern', role: 'PM, Deals & Offers', team: 'Spend Better', email: 'william.stern@chime.com', linkedin: 'https://www.linkedin.com/in/william-stern-22bb9a84', cardswitcher: false },
    { name: 'Mitch Ginsburg', role: 'PM, Save & Invest', team: 'Spend Better', email: 'mitch.ginsburg@chime.com', linkedin: 'https://www.linkedin.com/in/mginsburg', cardswitcher: false },
    { name: 'Cliff Canan', role: 'PM, Money Out & Credit', team: 'Spend Better', email: 'cliff.canan@chime.com', linkedin: 'https://www.linkedin.com/in/cliffcanan', cardswitcher: false },
    { name: 'Dilip Ramacha', role: 'PM, Multiplay', team: 'Spend Better', email: '', linkedin: '', cardswitcher: false },
    { name: 'Adyant Kanakamedala', role: 'PM, Cards-Success', team: 'Cards', email: 'adyant.kanakamedala@chime.com', linkedin: 'linkedin.com/in/adyantvk', cardswitcher: false },
    { name: 'Martin Williams', role: 'PM, Cards Experience', team: 'Cards', email: 'martin.williams@chime.com', linkedin: 'https://linkedin.com/in/martinjwilliams1', cardswitcher: false },
    { name: 'Anuj Khemka', role: 'PM, Unsecured', team: 'Cards', email: 'anuj.khemka@chime.com', linkedin: '', cardswitcher: false },
    { name: 'Allison Iakovlev', role: 'PM, Secured', team: 'Cards', email: '', linkedin: 'https://www.linkedin.com/in/allison-iakovlev', cardswitcher: false },
    { name: 'Xianxin Huang', role: 'EM, Spending Intelligence', team: 'Spend Better', email: 'xianxin.huang@chime.com', linkedin: 'https://www.linkedin.com/in/xianxin-huang-22673229', cardswitcher: true },
    { name: 'Bhavya Kashyap', role: 'EM, Deals & Offers', team: 'Spend Better', email: 'bhavya.kashyap@chime.com', linkedin: 'https://www.linkedin.com/in/bhavya-kashyap', cardswitcher: false },
    { name: 'Ziad Abdo', role: 'EM, Save & Invest', team: 'Spend Better', email: 'zabdo@chime.com', linkedin: 'https://www.linkedin.com/in/ziadabdo', cardswitcher: true },
    { name: 'Joshua Sacks', role: 'EM, Cards', team: 'Cards', email: 'joshua.sacks@chime.com', linkedin: 'https://www.linkedin.com/in/jmsacks', cardswitcher: false },
    { name: 'Ben McClaughry', role: 'Business Operations', team: 'Product Operations', email: 'ben.mcclaughry@chime.com', linkedin: 'https://www.linkedin.com/in/benmcclaughry', cardswitcher: true, isPrimary: true },
    { name: 'Jon Fulton', role: 'Product/UX Lead', team: 'Product', email: 'jfulton@chime.com', linkedin: 'https://www.linkedin.com/in/jonfultonsfo', cardswitcher: true },
    { name: 'Tom Connors', role: 'Engineer', team: 'Engineering', email: 'tom.connors@chime.com', linkedin: 'https://linkedin.com/in/tom-connors-3967921', cardswitcher: true },
    { name: 'Eliza Zhu', role: 'Security Risk Governance', team: 'Compliance', email: 'eliza.zhu@chime.com', linkedin: 'https://www.linkedin.com/in/eliza-zhu', cardswitcher: true },
  ];

  const teams = [...new Set(allPeople.map(p => p.team))];
  const filteredContacts = contactFilter === 'all' ? allPeople : allPeople.filter(p => p.cardswitcher);

  const cSuite = [
    { n: 'Mark Troughton', r: 'President', li: 'https://www.linkedin.com/in/matroughton' },
    { n: 'Janelle Sallenave', r: 'COO', li: 'https://www.linkedin.com/in/janelle-sallenave-489416' },
    { n: 'Matt Newcomb', r: 'CFO', li: 'https://www.linkedin.com/in/matthewsnewcomb' },
    { n: 'Jeff Currier', r: 'CTO', li: 'https://www.linkedin.com/in/jeff-currier' },
    { n: 'Vineet Mehra', r: 'CGO', li: 'https://www.linkedin.com/in/vineetmehra1' },
    { n: 'Sarah Wagener', r: 'CPO', li: 'linkedin.com/in/sarah-collins-wagener' },
    { n: 'Adam Frankel', r: 'General Counsel', li: 'https://linkedin.com/in/adam-spencer-frankel-2ba72616' },
    { n: 'Xiongwen Rui', r: 'CRO', li: 'https://www.linkedin.com/in/xiongwenrui' },
    { n: 'Jennifer Kuperman', r: 'Corp Affairs', li: 'linkedin.com/in/jenniferkuperman' },
    { n: 'Barkha Saxena', r: 'CDO', li: 'https://www.linkedin.com/in/barkhasaxena' },
  ];

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#fff',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        borderBottom: '1px solid #e5e7eb',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #00d09c 0%, #00b386 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14
          }}>C</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>Chime</div>
            <div style={{ fontSize: 11, color: '#6b7280' }}>Banking Products Division</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: 4 }}>
          {['org', 'teams', 'contacts'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '6px 14px',
                borderRadius: 6,
                border: 'none',
                background: activeTab === tab ? '#111827' : 'transparent',
                color: activeTab === tab ? '#fff' : '#6b7280',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {tab === 'org' ? 'Org Chart' : tab === 'teams' ? 'Teams' : 'Contacts'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '24px 32px' }}>
        
        {/* ORG CHART TAB */}
        {activeTab === 'org' && (
          <div style={{ textAlign: 'center' }}>
            
            {/* Primary contacts banner */}
            <div style={{
              display: 'inline-block',
              padding: 16,
              background: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: 10,
              marginBottom: 32
            }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: '#166534', marginBottom: 12, letterSpacing: 1 }}>PRIMARY CONTACTS</div>
              <div style={{ display: 'flex', gap: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Avatar name="Katherine Cheng" size={40} isPrimary />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Katherine Cheng</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>PM, Spending Intelligence</div>
                    <div style={{ fontSize: 10, color: '#9ca3af' }}>katherine@chime.com</div>
                    <a href="https://www.linkedin.com/in/katherine-cheng-82246258" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                      <LinkedInIcon size={12} /> Profile
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Avatar name="Ben McClaughry" size={40} isPrimary />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Ben McClaughry</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>Business Operations</div>
                    <div style={{ fontSize: 10, color: '#9ca3af' }}>ben.mcclaughry@chime.com</div>
                    <a href="https://www.linkedin.com/in/benmcclaughry" target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                      <LinkedInIcon size={12} /> Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders */}
            <SectionLabel>Founders</SectionLabel>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48 }}>
              <PersonCard name="Chris Britt" role="CEO & Co-Founder" linkedin="https://www.linkedin.com/in/cbritt" count={10} isExpanded={expanded.ceo} onToggle={() => toggle('ceo')} />
              <PersonCard name="Ryan King" role="Co-Founder & Interim CPO" linkedin="https://www.linkedin.com/in/ryanaking" count={1} isExpanded={expanded.ryan} onToggle={() => toggle('ryan')} isInterim />
            </div>

            {/* C-Suite */}
            {expanded.ceo && (
              <>
                <SectionLabel color="#374151">C-Suite (Reports to CEO)</SectionLabel>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center', 
                  gap: 16,
                  maxWidth: 900,
                  margin: '0 auto',
                  padding: 20,
                  background: '#fafafa',
                  borderRadius: 10
                }}>
                  {cSuite.map((p, i) => (
                    <CSuiteCard key={i} name={p.n} role={p.r} linkedin={p.li} />
                  ))}
                </div>
              </>
            )}

            {/* Product Organization */}
            {expanded.ryan && (
              <>
                <SectionLabel color="#7c3aed">Product Organization (Reports to Interim CPO)</SectionLabel>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <PersonCard name="Philip McDonnell" role="VP Product (Spending)" linkedin="https://www.linkedin.com/in/philipmcdonnell" count={4} isExpanded={expanded.philip} onToggle={() => toggle('philip')} />
                </div>
              </>
            )}

            {/* Banking Products Directors */}
            {expanded.philip && (
              <>
                <SectionLabel color="#6366f1">Banking Products Directors</SectionLabel>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
                  <PersonCard name="Brenden" role="GPM, Spend Better" count={5} isExpanded={expanded.brenden} onToggle={() => toggle('brenden')} />
                  <PersonCard name="Baishi Wu" role="GPM, Cards" linkedin="https://www.linkedin.com/in/baishi" count={4} isExpanded={expanded.baishi} onToggle={() => toggle('baishi')} />
                  <PersonCard name="Will Wix" role="Product Operations" linkedin="https://www.linkedin.com/in/will-wix-5846b68b" count={1} isExpanded={expanded.will} onToggle={() => toggle('will')} />
                  <PersonCard name="Michael Barrett" role="Engineering Lead" linkedin="https://www.linkedin.com/in/michaelebarrett" count={0} />
                </div>
              </>
            )}

            {/* Spend Better Squads */}
            {expanded.brenden && (
              <>
                <SectionLabel color="#059669">Spend Better Squads</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
                  <SquadCard squad="Spending Intelligence" pm="Katherine Cheng" pmLinkedin="https://www.linkedin.com/in/katherine-cheng-82246258" em="Xianxin Huang" emLinkedin="https://www.linkedin.com/in/xianxin-huang-22673229" isPrimary email="katherine@chime.com" />
                  <SquadCard squad="Deals & Offers" pm="William Stern" pmLinkedin="https://www.linkedin.com/in/william-stern-22bb9a84" em="Bhavya Kashyap" emLinkedin="https://www.linkedin.com/in/bhavya-kashyap" />
                  <SquadCard squad="Save & Invest" pm="Mitch Ginsburg" pmLinkedin="https://www.linkedin.com/in/mginsburg" em="Ziad Abdo" emLinkedin="https://www.linkedin.com/in/ziadabdo" />
                  <SquadCard squad="Money Out & Credit" pm="Cliff Canan" pmLinkedin="https://www.linkedin.com/in/cliffcanan" />
                  <SquadCard squad="Multiplay" pm="Dilip Ramacha" />
                </div>
              </>
            )}

            {/* Cards Squads */}
            {expanded.baishi && (
              <>
                <SectionLabel color="#2563eb">Cards Squads</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
                  <SquadCard squad="Cards-Success" pm="Adyant Kanakamedala" pmLinkedin="linkedin.com/in/adyantvk" em="Joshua Sacks" emLinkedin="https://www.linkedin.com/in/jmsacks" />
                  <SquadCard squad="Cards Experience" pm="Martin Williams" pmLinkedin="https://linkedin.com/in/martinjwilliams1" em="Joshua Sacks" emLinkedin="https://www.linkedin.com/in/jmsacks" />
                  <SquadCard squad="Unsecured" pm="Anuj Khemka" />
                  <SquadCard squad="Secured" pm="Allison Iakovlev" pmLinkedin="https://www.linkedin.com/in/allison-iakovlev" />
                </div>
              </>
            )}

            {/* Business Ops */}
            {expanded.will && (
              <>
                <SectionLabel color="#059669">Business Operations</SectionLabel>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <PersonCard name="Ben McClaughry" role="Business Operations" email="ben.mcclaughry@chime.com" linkedin="https://www.linkedin.com/in/benmcclaughry" isPrimary />
                </div>
              </>
            )}

            {/* Reporting lines */}
            <div style={{
              marginTop: 40,
              padding: 20,
              background: '#fafafa',
              borderRadius: 10,
              maxWidth: 600,
              margin: '40px auto 0',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#111827', marginBottom: 14 }}>Reporting Lines</div>
              <div style={{ padding: 12, background: '#f0fdf4', borderRadius: 6, marginBottom: 10, border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#166534', marginBottom: 4 }}>PRODUCT LINE</div>
                <div style={{ fontSize: 11, color: '#374151' }}>
                  Chris Britt → Ryan King (Interim CPO) → Philip McDonnell → Brenden → <strong>Katherine Cheng</strong>
                </div>
              </div>
              <div style={{ padding: 12, background: '#eff6ff', borderRadius: 6, border: '1px solid #bfdbfe' }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#1e40af', marginBottom: 4 }}>BUSINESS OPS LINE</div>
                <div style={{ fontSize: 11, color: '#374151' }}>
                  Philip McDonnell → Will Wix → <strong>Ben McClaughry</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TEAMS TAB */}
        {activeTab === 'teams' && (
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Teams</div>
            
            {teams.map((team, i) => {
              const teamMembers = allPeople.filter(p => p.team === team);
              return (
                <div key={i} style={{ marginBottom: 32 }}>
                  <div style={{ 
                    fontSize: 13, 
                    fontWeight: 600, 
                    color: '#374151', 
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    {team}
                    <span style={{ 
                      background: '#e5e7eb', 
                      color: '#6b7280', 
                      fontSize: 11, 
                      padding: '2px 8px', 
                      borderRadius: 10 
                    }}>
                      {teamMembers.length}
                    </span>
                  </div>
                  <div style={{ 
                    border: '1px solid #e5e7eb', 
                    borderRadius: 8, 
                    overflow: 'hidden'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                      <thead>
                        <tr style={{ background: '#f9fafb' }}>
                          <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11 }}>NAME</th>
                          <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11 }}>ROLE</th>
                          <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11 }}>EMAIL</th>
                          <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11 }}>LINKEDIN</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map((p, j) => (
                          <tr key={j} style={{ borderTop: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '10px 14px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <Avatar name={p.name} size={32} isPrimary={p.isPrimary} />
                                <span style={{ fontWeight: 500 }}>{p.name}</span>
                                {p.isPrimary && <span style={{ background: '#10b981', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>PRIMARY</span>}
                              </div>
                            </td>
                            <td style={{ padding: '10px 14px', color: '#6b7280' }}>{p.role}</td>
                            <td style={{ padding: '10px 14px', color: '#6b7280', fontFamily: 'monospace', fontSize: 12 }}>{p.email || '—'}</td>
                            <td style={{ padding: '10px 14px', color: '#6b7280' }}>
                              {p.linkedin ? (
                                <a href={p.linkedin.startsWith('http') ? p.linkedin : `https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                                  <LinkedInIcon size={14} />
                                  Profile
                                </a>
                              ) : '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CONTACTS TAB */}
        {activeTab === 'contacts' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#111827' }}>Contacts</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>
                  {filteredContacts.length} {contactFilter === 'cardswitcher' ? 'CardSwitcher contacts' : 'total contacts'}
                </div>
              </div>
              
              <div style={{ display: 'flex', background: '#f3f4f6', borderRadius: 8, padding: 4 }}>
                <button
                  onClick={() => setContactFilter('cardswitcher')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: 'none',
                    background: contactFilter === 'cardswitcher' ? '#fff' : 'transparent',
                    color: contactFilter === 'cardswitcher' ? '#111827' : '#6b7280',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    boxShadow: contactFilter === 'cardswitcher' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  CardSwitcher
                </button>
                <button
                  onClick={() => setContactFilter('all')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: 'none',
                    background: contactFilter === 'all' ? '#fff' : 'transparent',
                    color: contactFilter === 'all' ? '#111827' : '#6b7280',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    boxShadow: contactFilter === 'all' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  All Contacts
                </button>
              </div>
            </div>

            <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#f9fafb' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, borderBottom: '1px solid #e5e7eb' }}>NAME</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, borderBottom: '1px solid #e5e7eb' }}>ROLE</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, borderBottom: '1px solid #e5e7eb' }}>TEAM</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, borderBottom: '1px solid #e5e7eb' }}>EMAIL</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, borderBottom: '1px solid #e5e7eb' }}>LINKEDIN</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((p, i) => (
                    <tr key={i} style={{ background: p.isPrimary ? '#f0fdf4' : '#fff' }}>
                      <td style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Avatar name={p.name} size={32} isPrimary={p.isPrimary} />
                          <span style={{ fontWeight: 500 }}>{p.name}</span>
                          {p.isPrimary && <span style={{ background: '#10b981', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>PRIMARY</span>}
                        </div>
                      </td>
                      <td style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', color: '#6b7280' }}>{p.role}</td>
                      <td style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', color: '#6b7280' }}>{p.team}</td>
                      <td style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontFamily: 'monospace', fontSize: 12 }}>{p.email || '—'}</td>
                      <td style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', color: '#6b7280' }}>
                        {p.linkedin ? (
                          <a href={p.linkedin.startsWith('http') ? p.linkedin : `https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                            <LinkedInIcon size={14} />
                            Profile
                          </a>
                        ) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
