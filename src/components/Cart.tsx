import { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, Printer, Copy } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { t, language } = useLanguage();
  const [showTicket, setShowTicket] = useState(false);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₸';
  };

  const getItemName = (item: any) => {
    if (language === 'ru') return item.nameRu;
    if (language === 'kz') return item.nameKz || item.nameRu;
    return item.name;
  };

  const handleShowToWaiter = () => {
    setShowTicket(true);
  };

  const handleCopyTicket = () => {
    const orderLines = items.map(item => {
      const name = getItemName(item);
      return `${item.quantity}x ${name} - ${formatPrice(item.price * item.quantity)}`;
    });
    
    const orderText = [
      `=== ${t('cart.title').toUpperCase()} ===`,
      '',
      ...orderLines,
      '',
      `${t('cart.total')}: ${formatPrice(total)}`,
    ].join('\n');

    navigator.clipboard.writeText(orderText).then(() => {
      alert(t('cart.title') + ' copied to clipboard!');
    });
  };

  const handlePrintTicket = () => {
    window.print();
  };

  return (
    <>
      {/* Ticket Modal */}
      {showTicket && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowTicket(false)}
          />
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden mx-4">
            {/* Ticket Header */}
            <div className="bg-[#2c2416] text-white p-4 sm:p-6 text-center">
              <button
                onClick={() => setShowTicket(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
              </button>
              <h2 className="text-xl sm:text-2xl font-light mb-1 sm:mb-2">Coffee Milka</h2>
              <p className="text-white/80 text-xs sm:text-sm">Байтурсынова, 141, Almaty</p>
              <p className="text-white/60 text-[10px] sm:text-xs mt-1 sm:mt-2">
                {new Date().toLocaleDateString(language === 'ru' ? 'ru-RU' : language === 'kz' ? 'kk-KZ' : 'en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

            {/* Ticket Content */}
            <div className="p-4 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="border-b-2 border-dashed border-[#2c2416]/20 pb-4">
                <h3 className="text-base sm:text-lg font-medium text-[#2c2416] mb-3 sm:mb-4">{t('cart.title')}</h3>
                
                {items.map((item, index) => (
                  <div key={item.id} className="mb-3 sm:mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <div className="flex-1 min-w-0">
                        <span className="text-[#2c2416]/60 text-xs sm:text-sm font-medium mr-2">
                          {item.quantity}x
                        </span>
                        <span className="text-[#2c2416] font-medium text-sm sm:text-base break-words">
                          {getItemName(item)}
                        </span>
                      </div>
                      <span className="text-[#2c2416] font-medium text-sm sm:text-base whitespace-nowrap flex-shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    {index < items.length - 1 && (
                      <div className="border-t border-dashed border-[#2c2416]/10 mt-2 pt-2" />
                    )}
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="pt-4 border-t-2 border-[#2c2416]/30">
                <div className="flex justify-between items-center text-lg sm:text-xl font-bold text-[#2c2416]">
                  <span>{t('cart.total')}:</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Ticket Footer */}
            <div className="bg-[#faf9f7] p-4 sm:p-6 border-t border-[#2c2416]/10">
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleCopyTicket}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-white border border-[#2c2416]/20 text-[#2c2416] rounded-full font-medium hover:bg-[#2c2416]/5 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Copy</span>
                </button>
                <button
                  onClick={handlePrintTicket}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-[#2c2416] text-white rounded-full font-medium hover:bg-[#2c2416]/90 transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                >
                  <Printer size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Print</span>
                </button>
              </div>
              <p className="text-center text-[10px] sm:text-xs text-[#2c2416]/50 mt-3 sm:mt-4">
                {language === 'ru' 
                  ? 'Покажите этот билет официанту'
                  : language === 'kz'
                  ? 'Бұл билетті даяшыға көрсетіңіз'
                  : 'Show this ticket to your waiter'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Panel */}
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2c2416]/10">
          <h2 className="text-xl sm:text-2xl font-light text-[#2c2416]">{t('cart.title')}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2c2416]/5 hover:bg-[#2c2416]/10 flex items-center justify-center transition-colors"
          >
            <X size={18} className="sm:w-5 sm:h-5 text-[#2c2416]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <ShoppingCart size={48} className="sm:w-16 sm:h-16 text-[#2c2416]/20 mb-3 sm:mb-4" />
              <p className="text-[#2c2416]/60 text-base sm:text-lg">{t('cart.empty')}</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#faf9f7] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#2c2416]/5"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm sm:text-base text-[#2c2416] mb-1 break-words">
                        {getItemName(item)}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2c2416]/60">
                        {formatPrice(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-[#2c2416]/40 hover:text-[#2c2416]/70 transition-colors flex-shrink-0"
                    >
                      <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#2c2416]/20 flex items-center justify-center hover:bg-[#2c2416]/5 transition-colors"
                    >
                      <Minus size={12} className="sm:w-[14px] sm:h-[14px] text-[#2c2416]" />
                    </button>
                    <span className="text-[#2c2416] font-medium w-6 sm:w-8 text-center text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#2c2416]/20 flex items-center justify-center hover:bg-[#2c2416]/5 transition-colors"
                    >
                      <Plus size={12} className="sm:w-[14px] sm:h-[14px] text-[#2c2416]" />
                    </button>
                    <div className="ml-auto">
                      <span className="text-base sm:text-lg font-medium text-[#2c2416] whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#2c2416]/10 p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between text-lg sm:text-xl">
              <span className="text-[#2c2416]/70">{t('cart.total')}:</span>
              <span className="font-medium text-[#2c2416]">
                {formatPrice(total)}
              </span>
            </div>
            <button
              onClick={handleShowToWaiter}
              className="w-full py-3 sm:py-4 bg-[#2c2416] text-white rounded-full font-medium hover:bg-[#2c2416]/90 transition-colors text-sm sm:text-base"
            >
              {t('cart.showToWaiter')}
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
