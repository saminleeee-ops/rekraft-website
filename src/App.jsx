import React, { useState, useEffect } from 'react';

export default function REKCraftWebsite() {
  const [content, setContent] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // JSON 파일에서 콘텐츠 불러오기
  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error('Failed to load content:', err));
  }, []);

  const products = [
    {
      id: 1,
      name: "보자기 워크숍 팩",
      price: 45000,
      participants: "30명",
      description: "유기농 린넨 + 천연 염료로 만든 전통 보자기 키트",
      icon: "🧵",
      sustainability: "현지 소재 100% | 플라스틱 제로"
    },
    {
      id: 2,
      name: "단청 업사이클 팩",
      price: 52000,
      participants: "25명",
      description: "재활용 목재 + 식물 기반 페인트로 만드는 기능적 미술",
      icon: "🎨",
      sustainability: "폐기물 재활용 70% | 실용적 가치 높음"
    },
    {
      id: 3,
      name: "청자 도예 키트",
      price: 58000,
      participants: "20명",
      description: "지역 점토 + 생태 글레이즈로 만드는 기능적 용기",
      icon: "🏺",
      sustainability: "현지 재료 80% | 일상용 컨테이너"
    },
    {
      id: 4,
      name: "K-업사이클 스타터팩",
      price: 35000,
      participants: "50명",
      description: "폐기물을 한국 미술로 변환하는 모든 것이 포함",
      icon: "♻️",
      sustainability: "탄소 배출 80% 감축 | 혁신적 지속 가능성"
    }
  ];

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    setSelectedProduct(product);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`${email}로 뉴스레터 구독되었습니다!`);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`${contactName}님의 메시지가 전송되었습니다!`);
    setContactName('');
    setContactEmail('');
    setContactMessage('');
  };

  if (!content) return <div style={{ padding: '2rem', textAlign: 'center' }}>로딩 중...</div>;

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#2A2A2A', lineHeight: 1.6 }}>
      {/* 헤더 */}
      <header style={{
        background: 'white',
        padding: '1.5rem 2rem',
        borderBottom: '0.5px solid #EAEAEA',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 700, color: '#C97FB0' }}>RE:K-CRAFT</div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#philosophy" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer', fontSize: '14px' }}>철학</a>
          <a href="#shop" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer', fontSize: '14px' }}>상점</a>
          <a href="#b2b" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer', fontSize: '14px' }}>기관</a>
          <div style={{
            background: '#C97FB0',
            color: 'white',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 700
          }}>
            {cartCount}
          </div>
        </nav>
      </header>

      {/* === 히어로 섹션 === */}
      <section style={{
        background: 'linear-gradient(135deg, #F5F1E8 0%, white 100%)',
        padding: '8rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.8rem',
            fontWeight: 700,
            color: '#C97FB0',
            marginBottom: '1.5rem',
            whiteSpace: 'pre-line'
          }}>
            {content.hero.mainTitle}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#7BA89F',
            marginBottom: '2.5rem',
            lineHeight: 1.8,
            fontWeight: 500,
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            whiteSpace: 'pre-line'
          }}>
            {content.hero.subTitle}
          </p>
          <button style={{
            padding: '1.2rem 3rem',
            background: '#C97FB0',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(201, 127, 176, 0.3)'
          }}>
            {content.hero.ctaButton}
          </button>
        </div>
      </section>

      {/* === 문제 섹션 === */}
      <section style={{ background: '#F5F1E8', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#C97FB0',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 700,
            whiteSpace: 'pre-line'
          }}>
            {content.problem.headline}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {content.problem.items.map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '12px',
                borderLeft: '5px solid #C97FB0'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#C97FB0', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 철학 섹션 === */}
      <section id="philosophy" style={{ background: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#C97FB0',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 700,
            whiteSpace: 'pre-line'
          }}>
            {content.philosophy.headline}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {content.philosophy.items.map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #FAFAF8 0%, #F5F1E8 100%)',
                padding: '2.5rem',
                borderRadius: '12px',
                border: '2px solid #E8E8E8'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#C97FB0', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 기대 효과 섹션 === */}
      <section style={{ background: '#F5F1E8', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.8rem',
            color: '#C97FB0',
            marginBottom: '2rem',
            fontWeight: 700,
            whiteSpace: 'pre-line'
          }}>
            {content.benefit.headline}
          </h2>
          <p style={{
            fontSize: '1.4rem',
            color: '#C97FB0',
            fontWeight: 700,
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            "{content.benefit.quote}"
          </p>
        </div>
      </section>

      {/* === 제품 섹션 === */}
      <section id="shop" style={{ padding: '4rem 2rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#C97FB0', textAlign: 'center', marginBottom: '3rem', fontWeight: 700 }}>
          지속 가능한 제품 & 서비스
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: '#FAFAF8',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #E8E8E8'
            }} onClick={() => handleAddToCart(product)}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.icon}</div>
              <h3 style={{ color: '#C97FB0', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                {product.description}
              </p>
              <div style={{
                background: '#FFFBF5',
                padding: '0.8rem',
                borderRadius: '6px',
                marginBottom: '1rem',
                fontSize: '0.85rem',
                color: '#C97FB0',
                fontWeight: 600
              }}>
                🌱 {product.sustainability}
              </div>
              <div style={{ fontSize: '1.3rem', color: '#C97FB0', fontWeight: 700, marginBottom: '1.5rem' }}>
                ₩{product.price.toLocaleString()}
              </div>
              <button style={{
                width: '100%',
                padding: '0.8rem',
                background: '#7BA89F',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600
              }}>
                장바구니에 추가
              </button>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div style={{
            background: '#FFFBF5',
            padding: '1.5rem',
            borderRadius: '8px',
            marginTop: '2.5rem',
            textAlign: 'center',
            border: '2px solid #C97FB0',
            maxWidth: '1100px',
            margin: '2.5rem auto 0'
          }}>
            <p style={{ margin: 0, color: '#C97FB0', fontWeight: 600 }}>
              ✓ <strong>{selectedProduct.name}</strong>이(가) 장바구니에 추가되었습니다!
            </p>
          </div>
        )}
      </section>

      {/* === B2B 섹션 === */}
      <section id="b2b" style={{ background: '#F5F1E8', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#C97FB0', marginBottom: '3rem', fontWeight: 700 }}>
            한국 문화원을 위한 솔루션
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#C97FB0', fontSize: '1.5rem', marginBottom: '1.8rem', fontWeight: 700 }}>
                기관과의 직접 파트너십
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
                RE:K-Craft는 한국 문화원, 세종대왕학당, 대사관, 국제학교와 직접 협력하여 문화 프로그램의 지속 가능성을 전환합니다.
              </p>
              <ul style={{ listStyle: 'none', margin: '2rem 0' }}>
                {[
                  '70-80% 폐기물 감소',
                  '비용 효율적인 가격',
                  'ESG 준수 지원',
                  '현지 재료 소싱',
                  '맞춤형 워크숍 디자인',
                  '전담 파트너 매니저'
                ].map((feature, idx) => (
                  <li key={idx} style={{ paddingLeft: '1.8rem', marginBottom: '1rem', color: '#666', position: 'relative', fontSize: '0.95rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7BA89F', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '12px',
              border: '2px solid #C97FB0'
            }}>
              <p style={{ fontSize: '1.2rem', color: '#C97FB0', fontWeight: 700, marginBottom: '1rem' }}>
                파트너십 준비 완료?
              </p>
              <form onSubmit={handleContactSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                <input
                  type="text"
                  placeholder="이름"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  style={{
                    padding: '0.9rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '0.95rem'
                  }}
                />
                <input
                  type="email"
                  placeholder="이메일"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.9rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '0.95rem'
                  }}
                />
                <textarea
                  placeholder="문의 내용"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  style={{
                    padding: '0.9rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    minHeight: '120px',
                    fontFamily: 'inherit'
                  }}
                />
                <button type="submit" style={{
                  padding: '1rem',
                  background: '#C97FB0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  상담 예약하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* === 뉴스레터 === */}
      <section style={{
        background: 'linear-gradient(135deg, #C97FB0 0%, #7BA89F 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: 700 }}>
          친환경 K-공예 매뉴얼 보기
        </h2>
        <form onSubmit={handleNewsletterSubmit} style={{
          display: 'flex',
          gap: '0.7rem',
          maxWidth: '550px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              minWidth: '220px',
              padding: '1rem 1.2rem',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.95rem'
            }}
          />
          <button type="submit" style={{
            padding: '1rem 1.8rem',
            background: 'white',
            color: '#C97FB0',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            매뉴얼 받기
          </button>
        </form>
      </section>

      {/* 푸터 */}
      <footer style={{
        background: '#2A2A2A',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '0 0 1rem' }}>© 2026 RE:K-Craft 솔루션</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', color: '#aaa' }}>
          포장이 아닌 과정, 플라스틱이 아닌 문화. 🌿
        </p>
      </footer>
    </div>
  );
}
