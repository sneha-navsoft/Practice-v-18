import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('loginUser');
  const newReq= req.clone(
    {
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    }
  )
  return next(newReq);
};
