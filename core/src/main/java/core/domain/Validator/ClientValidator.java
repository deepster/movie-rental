package core.domain.Validator;

import core.domain.Client;

public class ClientValidator implements Validator<Client> {
    @Override
    public void validate(Client entity) throws ValidatorException {
        if (entity.getFirstName().trim().equals("")) {
            throw new InvalidNameException();
        }
        if (entity.getLastName().trim().equals("")) {
            throw new InvalidNameException();
        }
        if (entity.getYearOfBirth() < 0 || entity.getYearOfBirth() > 2019) {
            throw new InvalidYearException();
        }
    }
}
