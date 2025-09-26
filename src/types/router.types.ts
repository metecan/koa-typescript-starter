import Router from '@koa/router';
import Application from 'koa';

export type Ctx = Application.ParameterizedContext<
  Application.DefaultState,
  Application.DefaultContext & Router.RouterParamContext<Application.DefaultState, Application.DefaultContext>,
  unknown
>;

export type Next = Application.Next;
