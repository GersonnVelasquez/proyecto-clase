import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  provideFirestore,
} from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCcmixl_49NdtqYgdASAQ_3cBW1BCJfTAg',
        authDomain: 'proyectoclase-6d9f5.firebaseapp.com',
        projectId: 'proyectoclase-6d9f5',
        storageBucket: 'proyectoclase-6d9f5.firebasestorage.app',
        messagingSenderId: '855110548816',
        appId: '1:855110548816:web:a4df8562fc56d029c4c055',
        measurementId: 'G-VJ750XVSX4',
      })
    ),
    provideFirestore(() => {
      return initializeFirestore(getApp(), {
        localCache: persistentLocalCache(),
      });
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
