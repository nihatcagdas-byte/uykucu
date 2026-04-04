// ─── UYKUCU i18n — Shared Language System ───────────────
var LANG = localStorage.getItem('uykucu_lang') || 'tr';

var T = {
  // Navigation
  back_home: {tr:'← Ana Sayfa', en:'← Home'},
  nav_about: {tr:'Hakkımızda', en:'About'},
  nav_contact: {tr:'İletişim', en:'Contact'},
  nav_donate: {tr:'💜 Bağış', en:'💜 Donate'},
  nav_privacy: {tr:'Gizlilik', en:'Privacy'},
  nav_terms: {tr:'Koşullar', en:'Terms'},
  nav_cookies: {tr:'Çerez Politikası', en:'Cookie Policy'},

  // ─── Hakkımızda ─────────────────────────────
  about_title: {tr:'Hakkımızda', en:'About Us'},
  about_subtitle: {tr:'Daha huzurlu geceler için buradayız.', en:'We are here for more peaceful nights.'},
  about_p1: {tr:'Uykucu, herkesin kaliteli bir uyku deneyimi yaşamasını sağlamak amacıyla geliştirilmiş ücretsiz bir web uygulamasıdır. Modern Web Audio API teknolojisini kullanarak, tarayıcınızda doğrudan ses sentezi yapar — herhangi bir ses dosyası indirmenize gerek kalmaz.', en:'Sleeper is a free web application developed to help everyone experience quality sleep. Using modern Web Audio API technology, it synthesizes sounds directly in your browser — no need to download any audio files.'},
  about_p2: {tr:'Projenin arkasındaki motivasyon basit: uyku, sağlığımızın temel taşı olmasına rağmen, dünya nüfusunun önemli bir kısmı uyku problemleri yaşıyor. Uykucu, doğanın rahatlatıcı seslerini herkesin erişimine sunarak bu soruna bir katkıda bulunmayı amaçlıyor.', en:'The motivation behind the project is simple: despite sleep being a cornerstone of our health, a significant portion of the world population experiences sleep problems. Sleeper aims to contribute to this issue by making nature\'s soothing sounds accessible to everyone.'},
  about_features: {tr:'Ne Sunuyoruz?', en:'What We Offer'},
  about_f1: {tr:'37+ Doğal Ses', en:'37+ Natural Sounds'}, about_f1d: {tr:'Yağmur, deniz, orman, beyaz gürültü ve daha fazlası', en:'Rain, ocean, forest, white noise and more'},
  about_f2: {tr:'Mix Stüdyo', en:'Mix Studio'}, about_f2d: {tr:'Birden fazla sesi karıştırarak kendi ortamını yarat', en:'Mix multiple sounds to create your ambience'},
  about_f3: {tr:'Bebek Sesleri', en:'Baby Sounds'}, about_f3d: {tr:'Anne karnı, ninni, kalp atışı ve beşik sesi', en:'Womb sounds, lullaby, heartbeat and cradle'},
  about_f4: {tr:'AI Öneriler', en:'AI Suggestions'}, about_f4d: {tr:'Ruh haline göre akıllı ses önerileri', en:'Smart sound suggestions based on mood'},
  about_f5: {tr:'Zamanlayıcı', en:'Timer'}, about_f5d: {tr:'Belirlediğin sürede sesler yavaşça kapanır', en:'Sounds gradually fade after your set time'},
  about_f6: {tr:'Nefes Egzersizi', en:'Breathing Exercise'}, about_f6d: {tr:'4-7-8 tekniği ile rehberli soluma', en:'Guided breathing with 4-7-8 technique'},
  about_tech: {tr:'Teknoloji', en:'Technology'},
  about_tech_p: {tr:'Uykucu, tamamen istemci taraflı (client-side) çalışan bir uygulamadır. Tüm ses sentezi Web Audio API ile tarayıcınızda gerçekleşir. Bu sayede ses dosyası indirmenize gerek kalmaz, veri tüketiminiz minimum düzeyde kalır ve çevrimdışı kullanım mümkün olur.', en:'Sleeper is a fully client-side application. All sound synthesis happens in your browser via Web Audio API. This means no audio file downloads, minimal data usage, and offline capability.'},
  about_mission: {tr:'Misyonumuz', en:'Our Mission'},
  about_mission_p: {tr:'Herkesin daha iyi uyumasına yardımcı olmak. Uykucu tamamen ücretsizdir ve öyle kalmaya devam edecektir. Reklam gelirleri ile uygulamanın sürdürülebilirliğini sağlamayı hedefliyoruz.', en:'To help everyone sleep better. Sleeper is completely free and will remain so. We aim to sustain the application through advertising revenue.'},
  about_contact: {tr:'İletişim', en:'Contact'},
  about_contact_p: {tr:'Geri bildirimleriniz, önerileriniz ve işbirliği teklifleriniz için', en:'For your feedback, suggestions and partnership offers, visit our'},
  about_contact_link: {tr:'iletişim sayfamızdan', en:'contact page'},
  about_contact_end: {tr:'bize ulaşabilirsiniz.', en:'.'},

  // ─── İletişim ───────────────────────────────
  contact_title: {tr:'İletişim', en:'Contact'},
  contact_subtitle: {tr:'Soru, öneri ve geri bildirimleriniz için bize ulaşın.', en:'Reach out to us with your questions, suggestions and feedback.'},
  contact_web: {tr:'Web Sitesi', en:'Website'},
  contact_form_title: {tr:'İletişim Formu', en:'Contact Form'},
  contact_form_desc: {tr:'Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz. Mesajınız doğrudan bize e-posta olarak ulaşır.', en:'Fill out the form below to send us a message. Your message will be delivered to us directly via email.'},
  contact_name: {tr:'Adınız', en:'Your Name'},
  contact_name_ph: {tr:'Adınız Soyadınız', en:'Full Name'},
  contact_email: {tr:'E-posta Adresiniz', en:'Your Email'},
  contact_subject: {tr:'Konu', en:'Subject'},
  contact_subj_1: {tr:'Öneri / Geri Bildirim', en:'Suggestion / Feedback'},
  contact_subj_2: {tr:'Hata Bildirimi', en:'Bug Report'},
  contact_subj_3: {tr:'KVKK Başvurusu', en:'GDPR / Privacy Request'},
  contact_subj_4: {tr:'İş Birliği', en:'Partnership'},
  contact_subj_5: {tr:'Diğer', en:'Other'},
  contact_message: {tr:'Mesajınız', en:'Your Message'},
  contact_message_ph: {tr:'Mesajınızı buraya yazın...', en:'Write your message here...'},
  contact_send: {tr:'📩 Gönder', en:'📩 Send'},
  contact_kvkk_title: {tr:'KVKK Başvuruları', en:'Privacy Requests'},
  contact_kvkk_p: {tr:'6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki başvurularınız için yukarıdaki formda konu olarak "KVKK Başvurusu" seçeneğini seçerek bize ulaşabilirsiniz. Başvurularınıza 30 gün içinde yanıt verilecektir.', en:'For requests under personal data protection laws, please select "GDPR / Privacy Request" as the subject in the form above. We will respond to your request within 30 days.'},

  // ─── Bağış ──────────────────────────────────
  donate_title: {tr:'Bağış', en:'Donate'},
  donate_subtitle: {tr:'Bir fincan kahve kadar küçük, bir gece uykusu kadar değerli.', en:'As small as a cup of coffee, as valuable as a good night\'s sleep.'},
  donate_hero_title: {tr:'Uykucu\'yu Ayakta Tutan Sensin', en:'You Keep Sleeper Alive'},
  donate_hero_p: {tr:'Uykucu, ilk günden beri tamamen ücretsiz ve reklamsız olarak hizmet veriyor. Amacımız basit: herkesin huzurlu bir uyku hak ettiğine inanıyoruz. Ancak bir projeyi sevgiyle yapmak, onu sürdürebilmek için yeterli olmuyor — sunucu maliyetleri, alan adı, geliştirme saatleri ve yeni özellikler ekleme süreci hep devam ediyor.', en:'Sleeper has been completely free and ad-free since day one. Our goal is simple: we believe everyone deserves a peaceful sleep. But passion alone isn\'t enough to sustain a project — server costs, domain fees, development hours and new features require ongoing support.'},
  donate_p1: {tr:'Eğer Uykucu sana veya bebeğine huzurlu bir gece yaşattıysa, eğer zor bir günün sonunda seni rahatlattıysa, bunu bilmek bile bizim için çok değerli. Ama bir adım daha ileri gitmek istersen, küçük bir bağışla bu projenin devam etmesine katkıda bulunabilirsin.', en:'If Sleeper gave you or your baby a peaceful night, if it helped you relax after a hard day — just knowing that means the world to us. But if you\'d like to go a step further, a small donation can help keep this project going.'},
  donate_p2: {tr:'Her bağış, ne kadar küçük olursa olsun, bize şunu söylüyor: "Devam et, bu proje birileri için bir şey ifade ediyor." Ve bu motivasyon, dünyadaki en güçlü yakıt.', en:'Every donation, no matter how small, tells us: "Keep going, this project means something to someone." And that motivation is the most powerful fuel in the world.'},
  donate_qr_title: {tr:'QR Kod ile Bağış Yap', en:'Donate via QR Code'},
  donate_qr_desc: {tr:'Aşağıdaki QR kodu banka uygulamanızla tarayarak doğrudan bağış yapabilirsiniz:', en:'Scan the QR code below with your banking app to donate directly:'},
  donate_qr_bank: {tr:'Garanti BBVA · Banka uygulamanızla QR kodu tarayın', en:'Garanti BBVA · Scan QR code with your banking app'},
  donate_iban_label: {tr:'Diğer bankalardan göndermek için IBAN:', en:'IBAN for transfers from other banks:'},
  donate_where: {tr:'Bağışınız Nereye Gidiyor?', en:'Where Does Your Donation Go?'},
  donate_w1: {tr:'Sunucu & Hosting', en:'Server & Hosting'}, donate_w1d: {tr:'Sitenin 7/24 kesintisiz çalışması için', en:'For 24/7 uninterrupted service'},
  donate_w2: {tr:'Yeni Sesler', en:'New Sounds'}, donate_w2d: {tr:'Daha fazla doğal ses ve müzik eklenmesi', en:'Adding more natural sounds and music'},
  donate_w3: {tr:'Mobil Uygulama', en:'Mobile App'}, donate_w3d: {tr:'iOS ve Android uygulama geliştirme', en:'iOS and Android app development'},
  donate_w4: {tr:'Daha Fazla Dil', en:'More Languages'}, donate_w4d: {tr:'Uygulamanın daha fazla dile çevrilmesi', en:'Translating the app into more languages'},
  donate_thanks: {tr:'Bağış yapsan da yapmasan da, Uykucu her zaman ücretsiz kalacak. Seni burada görmek bile bizi mutlu ediyor.', en:'Whether you donate or not, Sleeper will always remain free. Just seeing you here makes us happy.'},
  donate_thanks_end: {tr:'İyi geceler ve huzurlu uykular dileriz.', en:'Wishing you good nights and peaceful sleep.'},
  donate_other: {tr:'Diğer Destekleme Yolları', en:'Other Ways to Support'},
  donate_other_p: {tr:'Maddi bağış dışında da bize destek olabilirsin:', en:'You can support us beyond financial donations:'},
  donate_other_p2: {tr:'Uykucu\'yu arkadaşlarınla paylaş, sosyal medyada bahset, veya iletişim sayfamızdan önerilerini ve geri bildirimlerini ilet. Her türlü destek bizi ileri taşıyor.', en:'Share Sleeper with your friends, mention it on social media, or send us your suggestions via our contact page. Every kind of support helps us move forward.'},

  // ─── Gizlilik ───────────────────────────────
  privacy_title: {tr:'Gizlilik Politikası', en:'Privacy Policy'},
  // ─── Koşullar ──────────────────────────────
  terms_title: {tr:'Kullanım Koşulları', en:'Terms of Use'},
  // ─── Çerez ─────────────────────────────────
  cookies_title: {tr:'Çerez Politikası', en:'Cookie Policy'},

  // ─── Başarılı ──────────────────────────────
  success_title: {tr:'Mesajınız Gönderildi!', en:'Message Sent!'},
  success_p: {tr:'Teşekkür ederiz. Mesajınız bize başarıyla ulaştı. En kısa sürede size geri dönüş yapacağız.', en:'Thank you. Your message has been successfully delivered. We will get back to you as soon as possible.'},
  success_btn: {tr:'🌙 Ana Sayfaya Dön', en:'🌙 Back to Home'},
  success_timer: {tr:' saniye içinde yönlendirileceksiniz...', en:' seconds until redirect...'},
};

function t(key) {
  var e = T[key];
  return e ? (e[LANG] || e['tr'] || key) : key;
}

function applyLang() {
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute('data-i18n');
    var val = t(key);
    if (val !== key) {
      if (els[i].tagName === 'INPUT' || els[i].tagName === 'TEXTAREA') {
        els[i].placeholder = val;
      } else {
        els[i].textContent = val;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', applyLang);
