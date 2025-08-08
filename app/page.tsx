"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Sprout, Brain, Satellite, BarChart3, Users, Target, DollarSign, Trophy, TrendingUp, MapPin, Phone, Mail, Globe, Cpu, Database, Shield, Smartphone, Calendar, CheckCircle, AlertTriangle, Zap, Award, PieChart, LineChart, Eye, Leaf, Camera, Map, FileText, Star } from 'lucide-react'

const slides = [
  { id: 'cover', title: 'Ana Sayfa' },
  { id: 'agenda', title: 'Sunum İçeriği' },
  { id: 'problem', title: 'Problem & Fırsat' },
  { id: 'solution', title: 'Çözümümüz' },
  { id: 'technology', title: 'Teknoloji' },
  { id: 'market', title: 'Pazar Analizi' },
  { id: 'business', title: 'İş Modeli' },
  { id: 'competition', title: 'Rekabet Avantajı' },
  { id: 'financials', title: 'Finansal Projeksiyonlar' },
  { id: 'investment', title: 'Yatırım Talebi' },
  { id: 'roadmap', title: 'Sonraki Adımlar' }
]

export default function FarmVisionPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlide = () => {
    switch (slides[currentSlide].id) {
      case 'cover':
        return <CoverSlide />
      case 'agenda':
        return <AgendaSlide />
      case 'problem':
        return <ProblemSlide />
      case 'solution':
        return <SolutionSlide />
      case 'technology':
        return <TechnologySlide />
      case 'market':
        return <MarketSlide />
      case 'business':
        return <BusinessSlide />
      case 'competition':
        return <CompetitionSlide />
      case 'financials':
        return <FinancialsSlide />
      case 'investment':
        return <InvestmentSlide />
      case 'roadmap':
        return <RoadmapSlide />
      default:
        return <CoverSlide />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <div className="flex gap-1 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="pt-16 pb-8 px-4">
        {renderSlide()}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

// Cover Slide Component
function CoverSlide() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-8">
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-4">
          <div className="p-4 bg-green-600 rounded-full">
            <Sprout className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            FARM VISION
          </h1>
        </div>
        <h2 className="text-2xl text-gray-700 font-medium">
          Türkiye'nin İlk AI Destekli Tarımsal Yönetim Platformu
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-green-600" />
            <h3 className="text-lg font-semibold">AI Destekli</h3>
          </div>
          <p className="text-gray-600">Yapay zeka ile meyve tespiti ve hastalık analizi</p>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <Satellite className="h-8 w-8 text-green-600" />
            <h3 className="text-lg font-semibold">Uydu Görüntüleme</h3>
          </div>
          <p className="text-gray-600">Drone ve uydu teknolojileri ile tarla analizi</p>
        </Card>

        <Card className="p-6 bg-white/60 backdrop-blur-sm border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-8 w-8 text-green-600" />
            <h3 className="text-lg font-semibold">Akıllı Raporlama</h3>
          </div>
          <p className="text-gray-600">Gerçek zamanlı analiz ve öngörülebilir raporlar</p>
        </Card>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white">
        <h3 className="text-2xl font-bold mb-4">2025 Hedefimiz</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold">2.9M</div>
            <div className="text-green-100">Hedef Çiftçi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">₺2.8B</div>
            <div className="text-green-100">Pazar Büyüklüğü</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">%60</div>
            <div className="text-green-100">Maliyet Tasarrufu</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Agenda Slide Component
function AgendaSlide() {
  const agendaItems = [
    { icon: Target, title: "Problem & Fırsat", desc: "Türk tarımındaki dijital açık" },
    { icon: Zap, title: "Çözümümüz", desc: "AI destekli tarımsal platform" },
    { icon: Cpu, title: "Teknoloji & İnovasyon", desc: "YOLO v7 ve modern altyapı" },
    { icon: PieChart, title: "Pazar Analizi", desc: "2.9M çiftçi ve $2.8B pazar" },
    { icon: DollarSign, title: "İş Modeli", desc: "SaaS abonelik ve AI krediler" },
    { icon: Trophy, title: "Rekabet Avantajları", desc: "Yerelleşme ve teknoloji üstünlüğü" },
    { icon: TrendingUp, title: "Finansal Projeksiyonlar", desc: "₺35M gelir hedefi (3 yıl)" },
    { icon: Award, title: "Yatırım Talebi", desc: "₺15M Seri A fonlama" },
    { icon: Calendar, title: "Sonraki Adımlar", desc: "6-24 ay roadmap" }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📊 SUNUM İÇERİĞİ</h1>
        <p className="text-xl text-gray-600">Farm Vision ile Türk tarımının dijital dönüşümü</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agendaItems.map((item, index) => (
          <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <item.icon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Problem Slide Component
function ProblemSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 PROBLEM: TÜRKİYE TARIMINDA DİJİTAL AÇIK</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mevcut Durum */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">📈 Mevcut Durum</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">83.5M</div>
                <div className="text-blue-700">nüfusun %18'i tarımla geçiniyor</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Map className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">23.2M</div>
                <div className="text-blue-700">hektar tarım arazisi</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-900">$60B</div>
                <div className="text-blue-700">yıllık tarımsal üretim değeri</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Kritik Sorunlar */}
        <Card className="p-8 bg-red-50 border-red-200">
          <h2 className="text-2xl font-bold text-red-900 mb-6">🔴 Kritik Sorunlar</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <div className="font-semibold text-red-900">Verim Kaybı</div>
                <div className="text-red-700 text-sm">Hastalık tespitinde geç kalma (%25-40 kayıp)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <div className="font-semibold text-red-900">Manuel İşlemler</div>
                <div className="text-red-700 text-sm">Meyve sayımı ve kalite kontrolü</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <div className="font-semibold text-red-900">Veri Eksikliği</div>
                <div className="text-red-700 text-sm">Bilimsel tarım uygulamalarının yetersizliği</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <div className="font-semibold text-red-900">Teknoloji Boşluğu</div>
                <div className="text-red-700 text-sm">Küçük çiftçilere yönelik AI çözümü yok</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Fırsat */}
      <Card className="mt-8 p-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 FIRSAT</h2>
          <div className="text-5xl font-bold mb-2">$2.8 Milyar</div>
          <div className="text-xl text-green-100">2025'te Türkiye tarım teknolojileri pazarı</div>
        </div>
      </Card>
    </div>
  )
}

// Solution Slide Component
function SolutionSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">💡 ÇÖZÜMÜMÜZ: FARM VISION</h1>
        <p className="text-xl text-gray-600">All-in-One Tarımsal AI Platformu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI Destekli Analiz */}
        <Card className="p-8 bg-purple-50 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-600 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-purple-900">Yapay Zeka Destekli Analiz</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">YOLO v7 ile meyve tespiti ve sayımı</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">Hastalık tanısı ve erken uyarı sistemi</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">Ağaç ve bitki sağlığı analizi</span>
            </div>
          </div>
        </Card>

        {/* Drone & Uydu Görüntüleme */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <Satellite className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-900">Drone & Uydu Görüntüleme</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">GeoTIFF harita işleme</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">NDVI, EVI, SAVI bitki örtüsü analizi</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">İnteraktif harita görselleştirme</span>
            </div>
          </div>
        </Card>

        {/* Akıllı Raporlama */}
        <Card className="p-8 bg-green-50 border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-600 rounded-full">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-900">Akıllı Raporlama</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">Gerçek zamanlı performans takibi</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">Trend analizi ve öngörüler</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">PDF/Excel rapor çıktıları</span>
            </div>
          </div>
        </Card>

        {/* Çiftçi Dostu Arayüz */}
        <Card className="p-8 bg-orange-50 border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-600 rounded-full">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-orange-900">Çiftçi Dostu Arayüz</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">100% Türkçe platform</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">Mobil uyumlu tasarım</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">Teknik bilgi gerektirmez</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Technology Slide Component
function TechnologySlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">⚡ TEKNOLOJİ & İNOVASYON</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Teknik Altyapı */}
        <Card className="p-8 bg-gray-50 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Cpu className="h-8 w-8 text-gray-700" />
            Teknik Altyapı
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-red-100 text-red-800">AI Framework</Badge>
              <span className="text-gray-700">YOLO v7, OpenCV, TensorFlow</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-800">Backend</Badge>
              <span className="text-gray-700">Flask, PostgreSQL, SQLAlchemy</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-800">Frontend</Badge>
              <span className="text-gray-700">Bootstrap, Chart.js, Leaflet.js</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-purple-100 text-purple-800">Deployment</Badge>
              <span className="text-gray-700">Railway.app, Neon Database</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-orange-100 text-orange-800">Security</Badge>
              <span className="text-gray-700">CSRF koruması, SSL encryption</span>
            </div>
          </div>
        </Card>

        {/* Benzersiz Özellikler */}
        <Card className="p-8 bg-emerald-50 border-emerald-200">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            <Star className="h-8 w-8 text-emerald-700" />
            Benzersiz Özellikler
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-800">Çoklu AI Modeli</div>
                <div className="text-emerald-700 text-sm">Meyve, hastalık, ağaç tespiti</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-800">Gerçek Zamanlı</div>
                <div className="text-emerald-700 text-sm">Anlık görüntü işleme</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-800">Offline Çalışma</div>
                <div className="text-emerald-700 text-sm">İnternet bağlantısı olmadan</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-800">Türkçe Optimizasyon</div>
                <div className="text-emerald-700 text-sm">Yerel tarım terminolojisi</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Patent Başvuruları */}
      <Card className="mt-8 p-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Shield className="h-8 w-8" />
          Patent Başvuruları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Award className="h-6 w-6 mt-1" />
            <div>
              <div className="font-semibold">Tarımsal AI Ensemble Metodolojisi</div>
              <div className="text-indigo-100 text-sm">Çoklu model entegrasyonu</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="h-6 w-6 mt-1" />
            <div>
              <div className="font-semibold">Türkçe Hastalık Tanı Algoritması</div>
              <div className="text-indigo-100 text-sm">Yerel bitki hastalıkları veritabanı</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Market Slide Component
function MarketSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 PAZAR ANALİZİ</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Hedef Pazar */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">🎯 Hedef Pazar</h2>
          <div className="space-y-6">
            <div className="p-4 bg-blue-100 rounded-lg">
              <div className="font-semibold text-blue-900 mb-2">Birincil: 2.9M Türk Çiftçi</div>
              <div className="space-y-2 text-sm text-blue-800">
                <div>• Küçük-orta ölçekli (0.1-20 hektar): %89</div>
                <div>• Gelir seviyesi: $5K-50K/yıl</div>
                <div>• Teknoloji adaptasyonu: Orta düzey</div>
              </div>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <div className="font-semibold text-blue-900 mb-2">İkincil: Danışmanlık Şirketleri</div>
              <div className="text-sm text-blue-800">500+ tarım danışmanlık firması</div>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <div className="font-semibold text-blue-900 mb-2">Üçüncül: Kooperatifler</div>
              <div className="text-sm text-blue-800">7,800+ tarımsal kooperatif</div>
            </div>
          </div>
        </Card>

        {/* Pazar Büyüklüğü */}
        <Card className="p-8 bg-green-50 border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">📊 Pazar Büyüklüğü</h2>
          <div className="space-y-6">
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-3xl font-bold text-green-900">$2.8B</div>
              <div className="text-green-700">TAM (Total Addressable Market)</div>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-2xl font-bold text-green-900">$850M</div>
              <div className="text-green-700">SAM (Serviceable Addressable)</div>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-xl font-bold text-green-900">$25M</div>
              <div className="text-green-700">SOM (3 yıl hedefi)</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Büyüme Trendi */}
      <Card className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8" />
          Büyüme Trendi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">%35/yıl</div>
            <div className="text-purple-100">Tarım teknolojisi adaptasyonu</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">%78/yıl</div>
            <div className="text-purple-100">AI çözümleri talebi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">%45/yıl</div>
            <div className="text-purple-100">Mobil tarım uygulamaları</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Business Model Slide Component
function BusinessSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">💰 İŞ MODELİ</h1>
      </div>

      {/* Gelir Akışları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="p-8 bg-emerald-50 border-emerald-200">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">💳 SaaS Abonelik Modeli</h2>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-100 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-emerald-900">Temel Plan</div>
                  <div className="text-sm text-emerald-700">5 hektar'a kadar</div>
                </div>
                <div className="text-2xl font-bold text-emerald-900">₺150/ay</div>
              </div>
            </div>
            <div className="p-4 bg-emerald-100 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-emerald-900">Profesyonel</div>
                  <div className="text-sm text-emerald-700">50 hektar'a kadar</div>
                </div>
                <div className="text-2xl font-bold text-emerald-900">₺400/ay</div>
              </div>
            </div>
            <div className="p-4 bg-emerald-100 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-emerald-900">Kurumsal</div>
                  <div className="text-sm text-emerald-700">Sınırsız + özel destek</div>
                </div>
                <div className="text-2xl font-bold text-emerald-900">₺1,200/ay</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">🧠 AI Analiz Kredileri</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg">
              <span className="text-blue-900">Meyve tespiti</span>
              <span className="font-bold text-blue-900">₺5/analiz</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg">
              <span className="text-blue-900">Hastalık taraması</span>
              <span className="font-bold text-blue-900">₺8/analiz</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg">
              <span className="text-blue-900">Detaylı rapor</span>
              <span className="font-bold text-blue-900">₺15/rapor</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-900 mt-6 mb-4">🎯 Danışmanlık Hizmetleri</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div>• Kurulum ve eğitim: ₺2,500/çiftlik</div>
            <div>• Özel AI model: ₺15,000+</div>
            <div>• Sezonluk danışmanlık: ₺5,000/sezon</div>
          </div>
        </Card>
      </div>

      {/* 3 Yıllık Projeksiyon */}
      <Card className="p-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">📈 3 Yıllık Gelir Projeksiyonu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">₺2.5M</div>
            <div className="text-green-100 mb-2">Yıl 1</div>
            <div className="text-sm text-green-100">500 aktif çiftçi</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">₺12M</div>
            <div className="text-green-100 mb-2">Yıl 2</div>
            <div className="text-sm text-green-100">2,500 aktif çiftçi</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">₺35M</div>
            <div className="text-green-100 mb-2">Yıl 3</div>
            <div className="text-sm text-green-100">8,000 aktif çiftçi</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Competition Slide Component
function CompetitionSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🏆 REKABET AVANTAJLARI</h1>
      </div>

      {/* Rakip Analizi */}
      <Card className="p-8 bg-red-50 border-red-200 mb-8">
        <h2 className="text-2xl font-bold text-red-900 mb-6">🔍 Mevcut Rakipler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-red-100 rounded-lg">
            <div className="font-semibold text-red-900 mb-2">Uluslararası</div>
            <div className="text-red-800">John Deere, Climate FieldView</div>
            <Badge className="mt-2 bg-red-200 text-red-800">Pahalı ($$$)</Badge>
          </div>
          <div className="p-4 bg-red-100 rounded-lg">
            <div className="font-semibold text-red-900 mb-2">Yerel</div>
            <div className="text-red-800">AgroVision, TarımTech</div>
            <Badge className="mt-2 bg-red-200 text-red-800">Sınırlı özellik</Badge>
          </div>
        </div>
      </Card>

      {/* Bizim Avantajlarımız */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-green-50 border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-green-600" />
            <h2 className="text-2xl font-bold text-green-900">Yerelleşme</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">%100 Türkçe arayüz</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">Türk tarım ürünlerine özel AI</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">Yerel iklim optimizasyonu</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-purple-50 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900">Teknoloji Üstünlüğü</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">En güncel YOLO v7 algoritması</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">Çoklu tespit sistemi</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800">Real-time processing</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-blue-50 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-900">Maliyet Etkinliği</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">Rakiplerden %60 daha uygun</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">Türk Lirası ile ödeme</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800">Devlet destekleri entegrasyonu</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-orange-50 border-orange-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-8 w-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-orange-900">Hızlı Deployment</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">Web-based platform</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">5 dakikada kurulum</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800">Anında kullanıma hazır</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Financials Slide Component
function FinancialsSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📈 FİNANSAL PROJEKSİYONLAR</h1>
      </div>

      {/* Gelir Projeksiyonu Tablosu */}
      <Card className="p-8 bg-emerald-50 border-emerald-200 mb-8">
        <h2 className="text-2xl font-bold text-emerald-900 mb-6">💰 Gelir Projeksiyonu (₺M)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-100">
                <th className="border border-emerald-200 p-3 text-left font-semibold text-emerald-900">Yıl</th>
                <th className="border border-emerald-200 p-3 text-left font-semibold text-emerald-900">Abonelik</th>
                <th className="border border-emerald-200 p-3 text-left font-semibold text-emerald-900">AI Krediler</th>
                <th className="border border-emerald-200 p-3 text-left font-semibold text-emerald-900">Danışmanlık</th>
                <th className="border border-emerald-200 p-3 text-left font-semibold text-emerald-900 bg-emerald-200">Toplam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 p-3 font-semibold text-emerald-900">2025</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">1.2</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">0.8</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">0.5</td>
                <td className="border border-emerald-200 p-3 font-bold text-emerald-900 bg-emerald-100">2.5</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 p-3 font-semibold text-emerald-900">2026</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">7.5</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">2.8</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">1.7</td>
                <td className="border border-emerald-200 p-3 font-bold text-emerald-900 bg-emerald-100">12.0</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 p-3 font-semibold text-emerald-900">2027</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">22.0</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">8.5</td>
                <td className="border border-emerald-200 p-3 text-emerald-800">4.5</td>
                <td className="border border-emerald-200 p-3 font-bold text-emerald-900 bg-emerald-100">35.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Maliyet Yapısı */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">📊 Maliyet Yapısı</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-800">R&D (AI model geliştirme)</span>
              <span className="font-bold text-blue-900">%35</span>
            </div>
            <Progress value={35} className="h-3" />
            
            <div className="flex justify-between items-center">
              <span className="text-blue-800">Sales & Marketing</span>
              <span className="font-bold text-blue-900">%25</span>
            </div>
            <Progress value={25} className="h-3" />
            
            <div className="flex justify-between items-center">
              <span className="text-blue-800">Operations</span>
              <span className="font-bold text-blue-900">%20</span>
            </div>
            <Progress value={20} className="h-3" />
            
            <div className="flex justify-between items-center">
              <span className="text-blue-800">Personnel</span>
              <span className="font-bold text-blue-900">%15</span>
            </div>
            <Progress value={15} className="h-3" />
            
            <div className="flex justify-between items-center">
              <span className="text-blue-800">Infrastructure</span>
              <span className="font-bold text-blue-900">%5</span>
            </div>
            <Progress value={5} className="h-3" />
          </div>
        </Card>

        {/* Unit Economics */}
        <Card className="p-8 bg-purple-50 border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">💎 Unit Economics</h2>
          <div className="space-y-4">
            <div className="p-4 bg-purple-100 rounded-lg">
              <div className="text-sm text-purple-700">CAC (Customer Acquisition Cost)</div>
              <div className="text-2xl font-bold text-purple-900">₺450</div>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg">
              <div className="text-sm text-purple-700">LTV (Lifetime Value)</div>
              <div className="text-2xl font-bold text-purple-900">₺3,200</div>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg">
              <div className="text-sm text-purple-700">LTV/CAC Oranı</div>
              <div className="text-2xl font-bold text-purple-900">7.1x</div>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg">
              <div className="text-sm text-purple-700">Payback Period</div>
              <div className="text-2xl font-bold text-purple-900">6 ay</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Karlılık */}
      <Card className="p-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">💰 Karlılık Projeksiyonu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">-₺3.2M</div>
            <div className="text-green-100 mb-2">Yıl 1</div>
            <div className="text-sm text-green-100">Yatırım aşaması</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">+₺2.4M</div>
            <div className="text-green-100 mb-2">Yıl 2</div>
            <div className="text-sm text-green-100">%20 net kar</div>
          </div>
          <div className="text-center p-6 bg-white/20 rounded-lg">
            <div className="text-3xl font-bold mb-2">+₺12.6M</div>
            <div className="text-green-100 mb-2">Yıl 3</div>
            <div className="text-sm text-green-100">%36 net kar</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Team Slide Component
function RoadmapSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 SONRAKİ ADIMLAR</h1>
      </div>

      <div className="space-y-8">
        {/* 6 Ay İçinde */}
        <Card className="p-8 bg-green-50 border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8" />
            6 Ay İçinde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800">Seri A fonlama tamamlanması</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800">1,000 aktif çiftçi kullanıcı</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800">TÜBİTAK desteği alınması</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800">İlk stratejik ortaklık (kooperatif)</span>
            </div>
          </div>
        </Card>

        {/* 12 Ay İçinde */}
        <Card className="p-8 bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8" />
            12 Ay İçinde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-blue-800">5,000 aktif kullanıcı</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-blue-800">Mobil uygulama lansmanı</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-blue-800">IoT sensor entegrasyonu</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <span className="text-blue-800">İkinci şehir expansionu</span>
            </div>
          </div>
        </Card>

        {/* 24 Ay İçinde */}
        <Card className="p-8 bg-purple-50 border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8" />
            24 Ay İçinde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <span className="text-purple-800">15,000 aktif kullanıcı</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <span className="text-purple-800">Uluslararası expansion (Balkanlar)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <span className="text-purple-800">AI patent portföyü genişletme</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <span className="text-purple-800">Seri B hazırlıkları</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Contact Slide Component
function InvestmentSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">💎 YATIRIM TALEBİ</h1>
      </div>

      {/* Aranan Yatırım */}
      <Card className="p-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Aranan Yatırım</h2>
          <div className="text-6xl font-bold mb-2">₺15 Milyon</div>
          <div className="text-xl text-emerald-100">(Seri A)</div>
        </div>
      </Card>

      {/* Kullanım Alanları */}
      <Card className="p-8 bg-blue-50 border-blue-200 mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">💰 Kullanım Alanları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-100 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-blue-900">R&D & AI Geliştirme</h3>
              <span className="text-2xl font-bold text-blue-900">₺6M</span>
            </div>
            <div className="text-sm text-blue-700 mb-3">40% of total funding</div>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Yeni AI modelleri</div>
              <div>• Drone entegrasyonu</div>
              <div>• IoT sensor geliştirme</div>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-blue-900">Sales & Marketing</h3>
              <span className="text-2xl font-bold text-blue-900">₺5.25M</span>
            </div>
            <div className="text-sm text-blue-700 mb-3">35% of total funding</div>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Dijital pazarlama kampanyaları</div>
              <div>• Saha satış ekibi genişletme</div>
              <div>• Partner network oluşturma</div>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-blue-900">Operations & Infrastructure</h3>
              <span className="text-2xl font-bold text-blue-900">₺2.25M</span>
            </div>
            <div className="text-sm text-blue-700 mb-3">15% of total funding</div>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Server kapasitesi artırımı</div>
              <div>• Güvenlik upgrades</div>
              <div>• Müşteri destek merkezi</div>
            </div>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-blue-900">Working Capital</h3>
              <span className="text-2xl font-bold text-blue-900">₺1.5M</span>
            </div>
            <div className="text-sm text-blue-700 mb-3">10% of total funding</div>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• 18 aylık operasyonel giderler</div>
              <div>• Acil durum rezervi</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Yatırımcı Profili */}
        <Card className="p-8 bg-purple-50 border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎯 Yatırımcı Profili</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
              <span className="text-purple-800">Agtech/SaaS deneyimi olan VC'ler</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
              <span className="text-purple-800">Türkiye'de tarım sektörüne odaklanan fonlar</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
              <span className="text-purple-800">Stratejik yatırımcılar (büyük tarım şirketleri)</span>
            </div>
          </div>
        </Card>

        {/* Exit Strategy */}
        <Card className="p-8 bg-orange-50 border-orange-200">
          <h2 className="text-2xl font-bold text-orange-900 mb-6">🚪 Exit Strategy</h2>
          <div className="space-y-4">
            <div className="p-4 bg-orange-100 rounded-lg">
              <div className="font-semibold text-orange-900">3-5 yıl:</div>
              <div className="text-orange-800">IPO veya stratejik satış</div>
            </div>
            <div className="p-4 bg-orange-100 rounded-lg">
              <div className="font-semibold text-orange-900">Hedef valuation:</div>
              <div className="text-orange-800">₺500M+</div>
            </div>
            <div className="p-4 bg-orange-100 rounded-lg">
              <div className="font-semibold text-orange-900">Potential acquirers:</div>
              <div className="text-orange-800">John Deere, Bayer, Syngenta</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Roadmap Slide Component
function ContactSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📞 İLETİŞİM</h1>
        <p className="text-xl text-gray-600">Sorularınız için hazırız!</p>
      </div>

      <Card className="p-8 bg-emerald-50 border-emerald-200 mb-8">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-600 rounded-full">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-emerald-900">Farm Vision Teknoloji Ltd. Şti.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-900">Adres</div>
                <div className="text-emerald-800">İTÜ Teknokent, Maslak, İstanbul</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-900">Website</div>
                <div className="text-emerald-800">farmvision.com.tr</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-900">Email</div>
                <div className="text-emerald-800">info@farmvision.com.tr</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-emerald-600 mt-1" />
              <div>
                <div className="font-semibold text-emerald-900">Telefon</div>
                <div className="text-emerald-800">+90 212 XXX XX XX</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-emerald-100 rounded-lg">
              <div className="font-semibold text-emerald-900 mb-2">CEO İletişim</div>
              <div className="text-emerald-800">[İsim] - ceo@farmvision.com.tr</div>
            </div>

            <div className="p-6 bg-emerald-100 rounded-lg">
              <div className="font-semibold text-emerald-900 mb-2">CTO İletişim</div>
              <div className="text-emerald-800">[İsim] - cto@farmvision.com.tr</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Closing Statement */}
      <Card className="p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">🙏 TEŞEKKÜRLER</h2>
        <div className="text-2xl font-semibold mb-6">"Türk tarımını geleceğe taşıyoruz"</div>
        <div className="text-green-100 text-sm">
          *Bu sunum gizlilik anlaşması kapsamındadır ve Farm Vision Teknoloji Ltd. Şti.'nin mülkiyetindedir.
        </div>
      </Card>
    </div>
  )
}
