import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const authGuard = () => {
  const router = inject(Router);
  const storageService = inject(StorageService);

  if (storageService.getItem('userData')) {
    return true;
  }

  return router.parseUrl('/login');
};