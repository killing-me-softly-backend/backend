import DataLoader from "dataloader";
import { Container } from "../../generated/graphql";
import { ContainerService } from "./containers.service";
export declare function createContainersLoader(containerService: ContainerService): DataLoader<string, Container, string>;
