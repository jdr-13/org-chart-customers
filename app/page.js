'use client';

import React, { useState } from 'react';
import { contacts, cSuite as cSuiteData, squads, downloadCSV } from '../lib/data';

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
  const LinkedInIcon = ({ size = 18 }) => (
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
            fontSize: 10,
            fontWeight: 700,
            padding: '3px 6px',
            borderRadius: 4
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
          gap: 4,
          background: '#0a66c2',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 500,
          textDecoration: 'none',
          marginTop: 6,
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#095195'}
        onMouseLeave={(e) => e.target.style.background = '#0a66c2'}
      >
        <LinkedInIcon size={14} />
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
      borderRadius: 8,
      padding: '6px 12px',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 8,
      transition: 'background 0.2s'
    }}
    onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
    onMouseLeave={(e) => e.target.style.background = '#2563eb'}
    >
      {count}<span style={{ fontSize: 10, marginLeft: 2 }}>{isExpanded ? '▲' : '▼'}</span>
    </button>
  );

  // Person card
  const PersonCard = ({ name, role, email, linkedin, count, isExpanded, onToggle, isPrimary, isInterim }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
      <Avatar name={name} isPrimary={isPrimary} isInterim={isInterim} size={72} />
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>{name}</div>
        <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>{role}</div>
        <LinkedInBtn url={linkedin} />
      </div>
      {count > 0 && <ExpandBtn count={count} isExpanded={isExpanded} onClick={onToggle} />}
    </div>
  );

  // Squad card
  const SquadCard = ({ squad, pm, pmLinkedin, em, emLinkedin, isPrimary, email }) => (
    <div style={{
      background: isPrimary ? '#f0fdf4' : '#fff',
      border: `2px solid ${isPrimary ? '#86efac' : '#e5e7eb'}`,
      borderRadius: 12,
      padding: 20,
      width: 220,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', marginBottom: 14, letterSpacing: 0.5, textAlign: 'center' }}>
        {squad.toUpperCase()}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name={pm} size={56} isPrimary={isPrimary} />
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>{pm}</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>Product Manager</div>
          {email && <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>{email}</div>}
          <LinkedInBtn url={pmLinkedin} />
        </div>
      </div>
      {em && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name={em} size={40} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>{em}</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>Eng Manager</div>
            {emLinkedin && (
              <a 
                href={emLinkedin.startsWith('http') ? emLinkedin : `https://${emLinkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#0a66c2', textDecoration: 'none', marginTop: 2, display: 'inline-block' }}
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
      fontSize: 14,
      fontWeight: 700,
      color,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      margin: '36px 0 20px',
      textAlign: 'center'
    }}>{children}</div>
  );

  // C-Suite card
  const CSuiteCard = ({ name, role, linkedin }) => (
    <div style={{ textAlign: 'center', width: 140 }}>
      <Avatar name={name} size={56} />
      <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginTop: 8 }}>{name}</div>
      <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{role}</div>
      {linkedin && (
        <a 
          href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontSize: 12, 
            color: '#0a66c2', 
            textDecoration: 'none',
            marginTop: 6
          }}
        >
          <LinkedInIcon size={14} />
          Profile
        </a>
      )}
    </div>
  );

  // All people data
  const allPeople = contacts;

  const teams = [...new Set(allPeople.map(p => p.team))];
  const filteredContacts = contactFilter === 'all' ? allPeople : allPeople.filter(p => p.cardswitcher);

  // Format cSuite data
  const cSuite = cSuiteData.map(c => ({ n: c.name, r: c.role, li: c.linkedin }));

  // CSV Export handler
  const handleExportCSV = () => {
    const dataToExport = contactFilter === 'all' ? allPeople : filteredContacts;
    const filename = contactFilter === 'all' ? 'chime_all_contacts.csv' : 'chime_cardswitcher_contacts.csv';
    downloadCSV(dataToExport, filename);
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#fff',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        borderBottom: '2px solid #e5e7eb',
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
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
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Chime</div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>Banking Products Division</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: 4 }}>
          {['org', 'teams', 'contacts'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 18px',
                borderRadius: 8,
                border: 'none',
                background: activeTab === tab ? '#111827' : 'transparent',
                color: activeTab === tab ? '#fff' : '#6b7280',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'org' ? 'Org Chart' : tab === 'teams' ? 'Teams' : 'Contacts'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* ORG CHART TAB */}
        {activeTab === 'org' && (
          <div style={{ textAlign: 'center' }}>
            
            {/* Primary contacts banner */}
            <div style={{
              display: 'inline-block',
              padding: 24,
              background: '#f0fdf4',
              border: '2px solid #86efac',
              borderRadius: 12,
              marginBottom: 40,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#166534', marginBottom: 16, letterSpacing: 1.2 }}>PRIMARY CONTACTS</div>
              <div style={{ display: 'flex', gap: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Avatar name="Katherine Cheng" size={56} isPrimary />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 17, fontWeight: 600 }}>Katherine Cheng</div>
                    <div style={{ fontSize: 14, color: '#6b7280', marginTop: 2 }}>PM, Spending Intelligence</div>
                    <div style={{ fontSize: 13, color: '#9ca3af', marginTop: 2 }}>katherine@chime.com</div>
                    <a href="https://www.linkedin.com/in/katherine-cheng-82246258" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                      <LinkedInIcon size={16} /> Profile
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Avatar name="Ben McClaughry" size={56} isPrimary />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 17, fontWeight: 600 }}>Ben McClaughry</div>
                    <div style={{ fontSize: 14, color: '#6b7280', marginTop: 2 }}>Business Operations</div>
                    <div style={{ fontSize: 13, color: '#9ca3af', marginTop: 2 }}>ben.mcclaughry@chime.com</div>
                    <a href="https://www.linkedin.com/in/benmcclaughry" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                      <LinkedInIcon size={16} /> Profile
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
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
                  {squads.spendBetter.map((s, i) => (
                    <SquadCard 
                      key={i}
                      squad={s.squad} 
                      pm={s.pm} 
                      pmLinkedin={s.pmLinkedin} 
                      em={s.em} 
                      emLinkedin={s.emLinkedin} 
                      isPrimary={s.isPrimary} 
                      email={s.email} 
                    />
                  ))}
                </div>
              </>
            )}

            {/* Cards Squads */}
            {expanded.baishi && (
              <>
                <SectionLabel color="#2563eb">Cards Squads</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18 }}>
                  {squads.cards.map((s, i) => (
                    <SquadCard 
                      key={i}
                      squad={s.squad} 
                      pm={s.pm} 
                      pmLinkedin={s.pmLinkedin} 
                      em={s.em} 
                      emLinkedin={s.emLinkedin} 
                      isPrimary={s.isPrimary} 
                      email={s.email} 
                    />
                  ))}
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
              marginTop: 48,
              padding: 24,
              background: '#fafafa',
              borderRadius: 12,
              maxWidth: 700,
              margin: '48px auto 0',
              textAlign: 'left',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 16 }}>Reporting Lines</div>
              <div style={{ padding: 16, background: '#f0fdf4', borderRadius: 8, marginBottom: 12, border: '2px solid #bbf7d0' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#166534', marginBottom: 6, letterSpacing: 0.5 }}>PRODUCT LINE</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
                  Chris Britt → Ryan King (Interim CPO) → Philip McDonnell → Brenden → <strong>Katherine Cheng</strong>
                </div>
              </div>
              <div style={{ padding: 16, background: '#eff6ff', borderRadius: 8, border: '2px solid #bfdbfe' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', marginBottom: 6, letterSpacing: 0.5 }}>BUSINESS OPS LINE</div>
                <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
                  Philip McDonnell → Will Wix → <strong>Ben McClaughry</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TEAMS TAB */}
        {activeTab === 'teams' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Teams</div>
              <button
                onClick={() => downloadCSV(allPeople, 'chime_all_teams.csv')}
                style={{
                  padding: '10px 20px',
                  background: '#10b981',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#059669'}
                onMouseLeave={(e) => e.target.style.background = '#10b981'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export as CSV
              </button>
            </div>
            
            {teams.map((team, i) => {
              const teamMembers = allPeople.filter(p => p.team === team);
              return (
                <div key={i} style={{ marginBottom: 32 }}>
                  <div style={{ 
                    fontSize: 16, 
                    fontWeight: 600, 
                    color: '#374151', 
                    marginBottom: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    {team}
                    <span style={{ 
                      background: '#e5e7eb', 
                      color: '#6b7280', 
                      fontSize: 13, 
                      padding: '4px 10px', 
                      borderRadius: 12,
                      fontWeight: 500
                    }}>
                      {teamMembers.length}
                    </span>
                  </div>
                  <div style={{ 
                    border: '1px solid #e5e7eb', 
                    borderRadius: 10, 
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                      <thead>
                        <tr style={{ background: '#f9fafb' }}>
                          <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5 }}>NAME</th>
                          <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5 }}>ROLE</th>
                          <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5 }}>EMAIL</th>
                          <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5 }}>LINKEDIN</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map((p, j) => (
                          <tr key={j} style={{ borderTop: '1px solid #e5e7eb' }}>
                            <td style={{ padding: '12px 18px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Avatar name={p.name} size={40} isPrimary={p.isPrimary} />
                                <span style={{ fontWeight: 500, fontSize: 15 }}>{p.name}</span>
                                {p.isPrimary && <span style={{ background: '#10b981', color: '#fff', fontSize: 11, padding: '3px 8px', borderRadius: 4, fontWeight: 600 }}>PRIMARY</span>}
                              </div>
                            </td>
                            <td style={{ padding: '12px 18px', color: '#6b7280', fontSize: 15 }}>{p.role}</td>
                            <td style={{ padding: '12px 18px', color: '#6b7280', fontFamily: 'monospace', fontSize: 14 }}>{p.email || '—'}</td>
                            <td style={{ padding: '12px 18px', color: '#6b7280' }}>
                              {p.linkedin ? (
                                <a href={p.linkedin.startsWith('http') ? p.linkedin : `https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                                  <LinkedInIcon size={16} />
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
                <div style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Contacts</div>
                <div style={{ fontSize: 15, color: '#6b7280', marginTop: 4 }}>
                  {filteredContacts.length} {contactFilter === 'cardswitcher' ? 'CardSwitcher contacts' : 'total contacts'}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ display: 'flex', background: '#f3f4f6', borderRadius: 8, padding: 4 }}>
                  <button
                    onClick={() => setContactFilter('cardswitcher')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      border: 'none',
                      background: contactFilter === 'cardswitcher' ? '#fff' : 'transparent',
                      color: contactFilter === 'cardswitcher' ? '#111827' : '#6b7280',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      boxShadow: contactFilter === 'cardswitcher' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    CardSwitcher
                  </button>
                  <button
                    onClick={() => setContactFilter('all')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 6,
                      border: 'none',
                      background: contactFilter === 'all' ? '#fff' : 'transparent',
                      color: contactFilter === 'all' ? '#111827' : '#6b7280',
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: 'pointer',
                      boxShadow: contactFilter === 'all' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    All Contacts
                  </button>
                </div>
                <button
                  onClick={handleExportCSV}
                  style={{
                    padding: '10px 20px',
                    background: '#10b981',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#059669'}
                  onMouseLeave={(e) => e.target.style.background = '#10b981'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Export as CSV
                </button>
              </div>
            </div>

            <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                <thead>
                  <tr style={{ background: '#f9fafb' }}>
                    <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5, borderBottom: '2px solid #e5e7eb' }}>NAME</th>
                    <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5, borderBottom: '2px solid #e5e7eb' }}>ROLE</th>
                    <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5, borderBottom: '2px solid #e5e7eb' }}>TEAM</th>
                    <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5, borderBottom: '2px solid #e5e7eb' }}>EMAIL</th>
                    <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 12, letterSpacing: 0.5, borderBottom: '2px solid #e5e7eb' }}>LINKEDIN</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((p, i) => (
                    <tr key={i} style={{ background: p.isPrimary ? '#f0fdf4' : '#fff' }}>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #e5e7eb' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <Avatar name={p.name} size={40} isPrimary={p.isPrimary} />
                          <span style={{ fontWeight: 500, fontSize: 15 }}>{p.name}</span>
                          {p.isPrimary && <span style={{ background: '#10b981', color: '#fff', fontSize: 11, padding: '3px 8px', borderRadius: 4, fontWeight: 600 }}>PRIMARY</span>}
                        </div>
                      </td>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontSize: 15 }}>{p.role}</td>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontSize: 15 }}>{p.team}</td>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontFamily: 'monospace', fontSize: 14 }}>{p.email || '—'}</td>
                      <td style={{ padding: '12px 18px', borderBottom: '1px solid #e5e7eb', color: '#6b7280' }}>
                        {p.linkedin ? (
                          <a href={p.linkedin.startsWith('http') ? p.linkedin : `https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
                            <LinkedInIcon size={16} />
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
