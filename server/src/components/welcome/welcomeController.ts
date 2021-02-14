import { RouterContext } from "../../../deps.ts";

const welcomeController = () => {
  const getWelcome = (ctx: RouterContext) => {
    ctx.response.body = `
        {___     {__      {_         {__ __        {_       
        {_ {__   {__     {_ __     {__    {__     {_ __     
        {__ {__  {__    {_  {__     {__          {_  {__    
        {__  {__ {__   {__   {__      {__       {__   {__   
        {__   {_ {__  {______ {__        {__   {______ {__  
        {__    {_ __ {__       {__ {__    {__ {__       {__ 
        {__      {__{__         {__  {__ __  {__         {__
                        Mission Control API`;
  };

  return {
    getWelcome,
  };
};

export default welcomeController;
