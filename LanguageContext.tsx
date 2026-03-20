import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    liveAnonymitySystem: 'Live Anonymity System',
    yourTemporary: 'Your Temporary',
    emailAddress: 'Email Address',
    activeBurnerId: 'Active Burner ID',
    loading: 'Loading...',
    copy: 'Copy',
    copied: 'Copied!',
    change: 'Change',
    heroQuote: 'Privacy is not an option, and it shouldn\'t be the price we accept for just getting on the internet.',
    tempNumberPlus: 'Temp Number+',
    noSignupRequired: 'No Signup Required',
    explorePrivacyHub: 'Explore Privacy Hub',
    inbox: 'Inbox',
    emptyInbox: 'Your inbox is empty',
    waitingForEmails: 'Waiting for incoming emails...',
    refresh: 'Refresh',
    delete: 'Delete',
    sender: 'Sender',
    subject: 'Subject',
    date: 'Date',
    backToInbox: 'Back to Inbox',
    faqTitle: 'Frequently Asked Questions',
  },
  es: {
    liveAnonymitySystem: 'Sistema de Anonimato en Vivo',
    yourTemporary: 'Tu Correo',
    emailAddress: 'Temporal',
    activeBurnerId: 'ID de Quemador Activo',
    loading: 'Cargando...',
    copy: 'Copiar',
    copied: '¡Copiado!',
    change: 'Cambiar',
    heroQuote: 'La privacidad no es una opción, y no debería ser el precio que aceptamos solo por conectarnos a internet.',
    tempNumberPlus: 'Número Temp+',
    noSignupRequired: 'Sin Registro',
    explorePrivacyHub: 'Explorar Centro de Privacidad',
    inbox: 'Bandeja de entrada',
    emptyInbox: 'Tu bandeja de entrada está vacía',
    waitingForEmails: 'Esperando correos entrantes...',
    refresh: 'Actualizar',
    delete: 'Eliminar',
    sender: 'Remitente',
    subject: 'Asunto',
    date: 'Fecha',
    backToInbox: 'Volver a la bandeja',
    faqTitle: 'Preguntas Frecuentes',
  },
  fr: {
    liveAnonymitySystem: 'Système d\'Anonymat en Direct',
    yourTemporary: 'Votre Adresse',
    emailAddress: 'E-mail Temporaire',
    activeBurnerId: 'ID de Brûleur Actif',
    loading: 'Chargement...',
    copy: 'Copier',
    copied: 'Copié !',
    change: 'Changer',
    heroQuote: 'La confidentialité n\'est pas une option, et elle ne devrait pas être le prix que nous acceptons juste pour aller sur internet.',
    tempNumberPlus: 'Numéro Temp+',
    noSignupRequired: 'Sans Inscription',
    explorePrivacyHub: 'Explorer le Centre de Confidentialité',
    inbox: 'Boîte de réception',
    emptyInbox: 'Votre boîte de réception est vide',
    waitingForEmails: 'En attente d\'e-mails entrants...',
    refresh: 'Rafraîchir',
    delete: 'Supprimer',
    sender: 'Expéditeur',
    subject: 'Sujet',
    date: 'Date',
    backToInbox: 'Retour à la boîte de réception',
    faqTitle: 'Questions Fréquemment Posées',
  },
  de: {
    liveAnonymitySystem: 'Live-Anonymitätssystem',
    yourTemporary: 'Ihre Temporäre',
    emailAddress: 'E-Mail-Adresse',
    activeBurnerId: 'Aktive Brenner-ID',
    loading: 'Wird geladen...',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    change: 'Ändern',
    heroQuote: 'Privatsphäre ist keine Option und sollte nicht der Preis sein, den wir akzeptieren, nur um ins Internet zu gehen.',
    tempNumberPlus: 'Temp Nummer+',
    noSignupRequired: 'Keine Anmeldung Erforderlich',
    explorePrivacyHub: 'Datenschutz-Hub Erkunden',
    inbox: 'Posteingang',
    emptyInbox: 'Ihr Posteingang ist leer',
    waitingForEmails: 'Warten auf eingehende E-Mails...',
    refresh: 'Aktualisieren',
    delete: 'Löschen',
    sender: 'Absender',
    subject: 'Betreff',
    date: 'Datum',
    backToInbox: 'Zurück zum Posteingang',
    faqTitle: 'Häufig Gestellte Fragen',
  },
  zh: {
    liveAnonymitySystem: '实时匿名系统',
    yourTemporary: '您的临时',
    emailAddress: '电子邮件地址',
    activeBurnerId: '活动燃烧器 ID',
    loading: '加载中...',
    copy: '复制',
    copied: '已复制！',
    change: '更改',
    heroQuote: '隐私不是一个选项，它不应该成为我们仅仅为了上网而接受的代价。',
    tempNumberPlus: '临时号码+',
    noSignupRequired: '无需注册',
    explorePrivacyHub: '探索隐私中心',
    inbox: '收件箱',
    emptyInbox: '您的收件箱是空的',
    waitingForEmails: '等待收到的电子邮件...',
    refresh: '刷新',
    delete: '删除',
    sender: '发件人',
    subject: '主题',
    date: '日期',
    backToInbox: '返回收件箱',
    faqTitle: '常见问题解答',
  },
  ja: {
    liveAnonymitySystem: 'ライブ匿名システム',
    yourTemporary: 'あなたの',
    emailAddress: '一時メールアドレス',
    activeBurnerId: 'アクティブバーナーID',
    loading: '読み込み中...',
    copy: 'コピー',
    copied: 'コピーしました！',
    change: '変更',
    heroQuote: 'プライバシーは選択肢ではなく、インターネットに接続するためだけに受け入れるべき代償ではありません。',
    tempNumberPlus: '一時番号+',
    noSignupRequired: '登録不要',
    explorePrivacyHub: 'プライバシーハブを探索',
    inbox: '受信トレイ',
    emptyInbox: '受信トレイは空です',
    waitingForEmails: '受信メールを待っています...',
    refresh: '更新',
    delete: '削除',
    sender: '送信者',
    subject: '件名',
    date: '日付',
    backToInbox: '受信トレイに戻る',
    faqTitle: 'よくある質問',
  }
};

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || (translations['en'] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
