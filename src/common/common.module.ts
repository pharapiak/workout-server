import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  //   controllers: [CatsController],
  providers: [
    /* db connection */
  ],
  exports: [],
})
export class CommonModule {}
