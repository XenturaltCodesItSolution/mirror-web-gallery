import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';

export const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems,
    isOpen,
    setIsOpen 
  } = useCart();
  const { settings } = useGlobalSettings();

  const formatPrice = (price: string) => {
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    return `${settings.currency.symbol}${numericPrice.toFixed(2)}`;
  };

  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shopping Cart ({getTotalItems()} items)
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Add some tests or services to get started
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                        {item.type === 'bloodtest' && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.reportTime} • Fasting: {item.fasting}
                          </div>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold">
                          {formatPrice(item.price)}
                        </div>
                        {item.originalPrice && (
                          <div className="text-xs text-muted-foreground line-through">
                            {formatPrice(item.originalPrice)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-medical-blue">
                    {settings.currency.symbol}{totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" variant="medical">
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  <p>• Free home collection for blood tests</p>
                  <p>• Reports available within 6-24 hours</p>
                  <p>• NABL accredited laboratories</p>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};