import React, { useState } from 'react';

export default function REKCraftWebsite() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const products = [
    {
      id: 1,
      name: "보자기 워크숍 팩",
      price: 45000,
      participants: "30명",
      description: "유기농 린넨 + 천연 염료로 만든 전통 보자기 키트",
      icon: "🧵"
    },
    {
      id: 2,
      name: "단청 업사이클 팩",
      price: 52000,
      participants: "25명",
      description: "재활용 목재 + 식물 기반 페인트로 만드는 기능적 미술",
      icon: "🎨"
    },
    {
      id: 3,
      name: "청자 도예 키트",
      price: 58000,
      participants: "20명",
      description: "지역 점토 + 생태 글레이즈로 만드는 기능적 용기",
      icon: "🏺"
    },
    {
      id: 4,
      name: "K-업사이클 스타터팩",
      price: 35000,
      participants: "50명",
      description: "폐기물을 한국 미술로 변환하는 모든 것이 포함",
      icon: "♻️"
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

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: '#2A2A2A' }}>
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
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 700, color: '#C97FB0' }}>RE:K-CRAFT</div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#shop" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer' }}>상점</a>
          <a href="#b2b" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer' }}>기관</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#2A2A2A', cursor: 'pointer' }}>정보</a>
          <div style={{
            background: '#C97FB0',
            color: 'white',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 700
          }}>
            {cartCount}
          </div>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section style={{
        background: 'linear-gradient(135deg, #F5F1E8 0%, white 100%)',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 700, color: '#C97FB0', marginBottom: '1rem' }}>
          지속 가능한 한국 공예
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#7BA89F', marginBottom: '2rem' }}>
          플라스틱 없이. 아름다움은 최대한. 진정한 문화.
        </p>
        <button style={{
          padding: '1rem 2.5rem',
          background: '#C97FB0',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          지금 탐색하기
        </button>
      </section>

      {/* 문제 정의 섹션 */}
      <section style={{ background: '#F5F1E8', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#C97FB0', textAlign: 'center', marginBottom: '2rem' }}>
          우리가 해결하는 문제
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { icon: '📦', title: '물류 폐기물', desc: '대부분의 해외 문화 프로그램은 한국에서 재료를 수입하여 불필요한 탄소 배출을 발생시킵니다.' },
            { icon: '♻️', title: '포장 폐기물', desc: '개별 플라스틱 포장 키트는 일회용 폐기물을 만듭니다. 지속 가능한 대안이 부족합니다.' },
            { icon: '🗑️', title: '제품 폐기물', desc: '장식용 공예품은 전시 후 버려집니다. 참가자가 완성된 제품을 보관할 동기가 없습니다.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              borderLeft: '4px solid #C97FB0'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ color: '#C97FB0', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 제품 섹션 */}
      <section id="shop" style={{ padding: '3rem 2rem', background: 'white' }}>
        <h2 style={{ fontSize: '2rem', color: '#C97FB0', textAlign: 'center', marginBottom: '2rem' }}>
          제품 & 서비스
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {products.map(product => (
            <div key={product.id} style={{
              background: '#F5F1E8',
              padding: '2rem',
              borderRadius: '8px',
              border: '0.5px solid #E8E8E8',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(201, 127, 176, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.icon}</div>
              <h3 style={{ color: '#C97FB0', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                {product.description}
              </p>
              <div style={{ color: '#7BA89F', fontWeight: 600, marginBottom: '0.5rem' }}>
                {product.participants} 참가자
              </div>
              <div style={{ fontSize: '1.3rem', color: '#C97FB0', fontWeight: 700, marginBottom: '1rem' }}>
                ₩{product.price.toLocaleString()}
              </div>
              <button style={{
                width: '100%',
                padding: '0.7rem 1.5rem',
                background: '#7BA89F',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
              }} onClick={() => handleAddToCart(product)}>
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
            marginTop: '2rem',
            textAlign: 'center',
            border: '2px solid #C97FB0'
          }}>
            <p style={{ margin: 0, color: '#C97FB0', fontWeight: 600 }}>
              ✓ <strong>{selectedProduct.name}</strong>이(가) 장바구니에 추가되었습니다!
            </p>
          </div>
        )}
      </section>

      {/* B2B 솔루션 섹션 */}
      <section id="b2b" style={{ background: '#F5F1E8', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: '#C97FB0', marginBottom: '2rem' }}>
            한국 문화원을 위한 솔루션
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#C97FB0', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                기관과의 직접 파트너십
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: 1.7 }}>
                RE:K-Craft는 한국 문화원, 세종대왕학당, 대사관, 국제학교와 직접 협력하여 문화 프로그램의 지속 가능성을 전환합니다.
              </p>
              <ul style={{ listStyle: 'none', margin: '1.5rem 0' }}>
                {[
                  '70-80% 폐기물 감소',
                  '비용 효율적인 가격',
                  'ESG 준수 지원',
                  '현지 재료 소싱',
                  '맞춤형 워크숍 디자인',
                  '전담 파트너 매니저'
                ].map((feature, idx) => (
                  <li key={idx} style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem', color: '#666', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7BA89F', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              border: '2px solid #C97FB0'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#C97FB0', fontWeight: 600, marginBottom: '1rem' }}>
                파트너십 준비 완료?
              </p>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                기관의 지속 가능성 목표를 달성하는 방법을 논의해봅시다.
              </p>
              <form onSubmit={handleContactSubmit} style={{ display: 'grid', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="이름"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  style={{
                    padding: '0.8rem',
                    border: '0.5px solid #ccc',
                    borderRadius: '4px',
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
                    padding: '0.8rem',
                    border: '0.5px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '0.95rem'
                  }}
                />
                <textarea
                  placeholder="문의 내용"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  style={{
                    padding: '0.8rem',
                    border: '0.5px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '0.95rem',
                    minHeight: '100px',
                    fontFamily: 'inherit'
                  }}
                />
                <button type="submit" style={{
                  padding: '0.9rem',
                  background: '#C97FB0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
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

      {/* 임팩트 섹션 */}
      <section style={{ background: 'white', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#C97FB0', textAlign: 'center', marginBottom: '2rem' }}>
          우리의 영향
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {[
            { number: '900+', label: '전 세계 문화원' },
            { number: '70-80%', label: '폐기물 감소' },
            { number: '190+', label: '국가 대상' },
            { number: '100%', label: '기능적 제품' }
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#C97FB0', marginBottom: '0.5rem' }}>
                {item.number}
              </div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 뉴스레터 섹션 */}
      <section style={{
        background: 'linear-gradient(135deg, #C97FB0 0%, #7BA89F 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>운동에 참여하세요</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          새로운 키트, 지속 가능성 인사이트, K-컬처 영감을 받으세요.
        </p>
        <form onSubmit={handleNewsletterSubmit} style={{
          display: 'flex',
          gap: '0.5rem',
          maxWidth: '500px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '0.9rem 1.2rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '0.95rem'
            }}
          />
          <button type="submit" style={{
            padding: '0.9rem 1.5rem',
            background: 'white',
            color: '#C97FB0',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            구독하기
          </button>
        </form>
      </section>

      {/* 푸터 */}
      <footer style={{
        background: '#2A2A2A',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: 0 }}>
          © 2026 RE:K-Craft 솔루션. 지속 가능한 전통은 여기서부터 시작됩니다. 🌿
        </p>
        <p style={{ margin: '1rem 0 0', fontSize: '0.85rem', color: '#999' }}>
          서울 | 문의: contact@rekcraft.com | 전화: +82-2-XXXX-XXXX
        </p>
      </footer>
    </div>
  );
}
