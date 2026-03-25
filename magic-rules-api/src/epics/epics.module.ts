import { Module } from '@nestjs/common';
import { EpicsController } from './epics.controller';
import { EpicsService } from './epics.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EpicsController],
  providers: [EpicsService, PrismaService],
})
export class EpicsModule {}
