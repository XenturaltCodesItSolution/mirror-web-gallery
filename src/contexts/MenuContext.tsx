import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuItem {
  id: string;
  title: string;
  path: string;
  order: number;
}

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  reorderMenuItems: (items: MenuItem[]) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const defaultMenuItems: MenuItem[] = [
  { id: '1', title: 'Home', path: '/', order: 1 },
  { id: '2', title: 'Offers', path: '/offers', order: 2 },
  { id: '3', title: 'Thyrocare Package', path: '/thyrocare-package', order: 3 },
  { id: '4', title: 'Thyrocare Profile', path: '/thyrocare-profile', order: 4 },
  { id: '5', title: 'Blood Test', path: '/blood-test', order: 5 },
  { id: '6', title: 'Diagnostic Centres', path: '/diagnostic-centres', order: 6 },
  { id: '7', title: 'Blog', path: '/blog', order: 7 },
  { id: '8', title: 'Shop', path: '/shop', order: 8 },
];

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString(),
    };
    setMenuItems(prev => [...prev, newItem].sort((a, b) => a.order - b.order));
  };

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ).sort((a, b) => a.order - b.order)
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const reorderMenuItems = (items: MenuItem[]) => {
    setMenuItems(items);
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      reorderMenuItems,
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};